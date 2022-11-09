import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCoursesContentIdMetadataCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class PutCoursesContentIdMetadataCategoryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;
}


export class PutCoursesContentIdMetadataCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCoursesContentIdMetadataCategoryPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutCoursesContentIdMetadataCategoryRequestBody;
}


export class PutCoursesContentIdMetadataCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  courseMetaResponse?: shared.CourseMetaResponse;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}

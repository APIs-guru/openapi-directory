import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCoursesContentIdMetadataCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class PutCoursesContentIdMetadataCategoryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: string;
}


export class PutCoursesContentIdMetadataCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCoursesContentIdMetadataCategoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutCoursesContentIdMetadataCategoryRequestBody;
}


export class PutCoursesContentIdMetadataCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  courseMetaResponse?: shared.CourseMetaResponse;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}

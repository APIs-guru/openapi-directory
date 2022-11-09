import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCoursesContentIdMetadataTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class PutCoursesContentIdMetadataTagsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}


export class PutCoursesContentIdMetadataTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCoursesContentIdMetadataTagsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutCoursesContentIdMetadataTagsRequestBody;
}


export class PutCoursesContentIdMetadataTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  courseMetaResponse?: shared.CourseMetaResponse;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}

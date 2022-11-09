import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCoursesContentIdMetadataTopicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class PutCoursesContentIdMetadataTopicRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=topic" })
  topic?: string;
}


export class PutCoursesContentIdMetadataTopicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCoursesContentIdMetadataTopicPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutCoursesContentIdMetadataTopicRequestBody;
}


export class PutCoursesContentIdMetadataTopicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  courseMetaResponse?: shared.CourseMetaResponse;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}

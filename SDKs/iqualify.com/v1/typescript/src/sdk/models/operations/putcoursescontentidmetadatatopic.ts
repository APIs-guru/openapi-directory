import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCoursesContentIdMetadataTopicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class PutCoursesContentIdMetadataTopicRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}


export class PutCoursesContentIdMetadataTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCoursesContentIdMetadataTopicPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutCoursesContentIdMetadataTopicRequestBody;
}


export class PutCoursesContentIdMetadataTopicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  courseMetaResponse?: shared.CourseMetaResponse;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}

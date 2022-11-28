import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCoursesContentIdMetadataTagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class PutCoursesContentIdMetadataTagsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class PutCoursesContentIdMetadataTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCoursesContentIdMetadataTagsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutCoursesContentIdMetadataTagsRequestBody;
}


export class PutCoursesContentIdMetadataTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  courseMetaResponse?: shared.CourseMetaResponse;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}

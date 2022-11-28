import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCoursesContentIdMetadataLevelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class PutCoursesContentIdMetadataLevelRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: string;
}


export class PutCoursesContentIdMetadataLevelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCoursesContentIdMetadataLevelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutCoursesContentIdMetadataLevelRequestBody;
}


export class PutCoursesContentIdMetadataLevelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  courseMetaResponse?: shared.CourseMetaResponse;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}

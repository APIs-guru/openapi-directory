import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCoursesContentIdMetadataLevelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class PutCoursesContentIdMetadataLevelRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=level" })
  level?: string;
}


export class PutCoursesContentIdMetadataLevelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCoursesContentIdMetadataLevelPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutCoursesContentIdMetadataLevelRequestBody;
}


export class PutCoursesContentIdMetadataLevelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  courseMetaResponse?: shared.CourseMetaResponse;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}

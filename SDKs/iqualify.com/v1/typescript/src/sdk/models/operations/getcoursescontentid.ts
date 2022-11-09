import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCoursesContentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class GetCoursesContentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCoursesContentIdPathParams;
}


export class GetCoursesContentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  courseMetaResponse?: shared.CourseMetaResponse;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCoursesContentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class GetCoursesContentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCoursesContentIdPathParams;
}


export class GetCoursesContentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  courseMetaResponse?: shared.CourseMetaResponse;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}

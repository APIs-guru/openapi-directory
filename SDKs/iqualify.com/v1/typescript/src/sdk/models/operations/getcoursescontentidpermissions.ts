import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCoursesContentIdPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=contentId" })
  contentId: string;
}


export class GetCoursesContentIdPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCoursesContentIdPermissionsPathParams;
}


export class GetCoursesContentIdPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  userPermission?: any;
}

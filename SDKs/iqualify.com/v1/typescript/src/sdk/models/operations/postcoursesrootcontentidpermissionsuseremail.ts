import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCoursesRootContentIdPermissionsUserEmailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rootContentId" })
  rootContentId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=isBuilder" })
  isBuilder?: boolean;

  @Metadata({ data: "json, name=isReviewer" })
  isReviewer?: boolean;
}


export class PostCoursesRootContentIdPermissionsUserEmailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCoursesRootContentIdPermissionsUserEmailPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser;
}


export class PostCoursesRootContentIdPermissionsUserEmail201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentId" })
  contentId?: string;
}


export class PostCoursesRootContentIdPermissionsUserEmailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  postCoursesRootContentIdPermissionsUserEmail201ApplicationJsonObject?: PostCoursesRootContentIdPermissionsUserEmail201ApplicationJson;

  @Metadata()
  statusCode: number;
}

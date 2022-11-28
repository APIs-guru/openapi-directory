import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostCoursesRootContentIdPermissionsUserEmailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rootContentId" })
  rootContentId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userEmail" })
  userEmail: string;
}


export class PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isBuilder" })
  isBuilder?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isReviewer" })
  isReviewer?: boolean;
}


export class PostCoursesRootContentIdPermissionsUserEmail201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentId" })
  contentId?: string;
}


export class PostCoursesRootContentIdPermissionsUserEmailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostCoursesRootContentIdPermissionsUserEmailPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser;
}


export class PostCoursesRootContentIdPermissionsUserEmailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  postCoursesRootContentIdPermissionsUserEmail201ApplicationJsonObject?: PostCoursesRootContentIdPermissionsUserEmail201ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}

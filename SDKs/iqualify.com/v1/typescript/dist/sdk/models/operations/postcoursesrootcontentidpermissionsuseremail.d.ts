import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCoursesRootContentIdPermissionsUserEmailPathParams extends SpeakeasyBase {
    rootContentId: string;
    userEmail: string;
}
export declare class PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser extends SpeakeasyBase {
    isBuilder?: boolean;
    isReviewer?: boolean;
}
export declare class PostCoursesRootContentIdPermissionsUserEmail201ApplicationJson extends SpeakeasyBase {
    contentId?: string;
}
export declare class PostCoursesRootContentIdPermissionsUserEmailRequest extends SpeakeasyBase {
    pathParams: PostCoursesRootContentIdPermissionsUserEmailPathParams;
    request: PostCoursesRootContentIdPermissionsUserEmailPermissionToBeGrantedToTheUser;
}
export declare class PostCoursesRootContentIdPermissionsUserEmailResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    postCoursesRootContentIdPermissionsUserEmail201ApplicationJsonObject?: PostCoursesRootContentIdPermissionsUserEmail201ApplicationJson;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostGroupGroupTitlePathParams extends SpeakeasyBase {
    groupTitle: string;
}
export declare enum PostGroupGroupTitleCmdEnum {
    AddUser = "add_user",
    RemoveUser = "remove_user",
    SetEmail = "set_email"
}
export declare class PostGroupGroupTitleQueryParams extends SpeakeasyBase {
    cmd?: PostGroupGroupTitleCmdEnum;
    email?: string;
    userid?: string;
}
export declare class PostGroupGroupTitleSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PostGroupGroupTitleRequest extends SpeakeasyBase {
    pathParams: PostGroupGroupTitlePathParams;
    queryParams: PostGroupGroupTitleQueryParams;
    security: PostGroupGroupTitleSecurity;
}
export declare class PostGroupGroupTitleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BlogPerUserInfoRoleEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}
export declare class BlogPerUserInfo extends SpeakeasyBase {
    blogId?: string;
    hasAdminAccess?: boolean;
    kind?: string;
    photosAlbumKey?: string;
    role?: BlogPerUserInfoRoleEnum;
    userId?: string;
}

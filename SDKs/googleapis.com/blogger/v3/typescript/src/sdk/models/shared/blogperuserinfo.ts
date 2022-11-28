import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BlogPerUserInfoRoleEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED",
    Reader = "READER",
    Author = "AUTHOR",
    Admin = "ADMIN"
}


export class BlogPerUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blogId" })
  blogId?: string;

  @SpeakeasyMetadata({ data: "json, name=hasAdminAccess" })
  hasAdminAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=photosAlbumKey" })
  photosAlbumKey?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: BlogPerUserInfoRoleEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BlogPerUserInfoRoleEnum {
    ViewTypeUnspecified = "VIEW_TYPE_UNSPECIFIED"
,    Reader = "READER"
,    Author = "AUTHOR"
,    Admin = "ADMIN"
}


export class BlogPerUserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=blogId" })
  blogId?: string;

  @Metadata({ data: "json, name=hasAdminAccess" })
  hasAdminAccess?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=photosAlbumKey" })
  photosAlbumKey?: string;

  @Metadata({ data: "json, name=role" })
  role?: BlogPerUserInfoRoleEnum;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}

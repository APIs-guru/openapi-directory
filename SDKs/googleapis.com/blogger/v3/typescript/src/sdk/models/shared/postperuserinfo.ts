import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostPerUserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=blogId" })
  blogId?: string;

  @Metadata({ data: "json, name=hasEditAccess" })
  hasEditAccess?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=postId" })
  postId?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}

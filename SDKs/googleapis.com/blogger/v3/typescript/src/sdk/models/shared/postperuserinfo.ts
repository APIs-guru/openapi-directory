import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostPerUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blogId" })
  blogId?: string;

  @SpeakeasyMetadata({ data: "json, name=hasEditAccess" })
  hasEditAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=postId" })
  postId?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}

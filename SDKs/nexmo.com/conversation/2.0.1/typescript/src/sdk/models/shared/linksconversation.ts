import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LinksConversationSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class LinksConversation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: LinksConversationSelf;
}

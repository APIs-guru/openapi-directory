import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LinksConversationSelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class LinksConversation extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: LinksConversationSelf;
}

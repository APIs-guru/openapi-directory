import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LinksConversationsListSelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href: string;
}


// LinksConversationsList
/** 
 * A series of links between resources in this API in the http://stateless.co/hal_specification.html.
**/
export class LinksConversationsList extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self: LinksConversationsListSelf;
}

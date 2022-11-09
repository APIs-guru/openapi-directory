import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelToStoreLinkDetails } from "./channeltostorelinkdetails";

export enum ThirdPartyLinkSnippetTypeEnum {
    LinkUnspecified = "linkUnspecified"
,    ChannelToStoreLink = "channelToStoreLink"
}


// ThirdPartyLinkSnippet
/** 
 * Basic information about a third party account link, including its type and type-specific information.
**/
export class ThirdPartyLinkSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelToStoreLink" })
  channelToStoreLink?: ChannelToStoreLinkDetails;

  @Metadata({ data: "json, name=type" })
  type?: ThirdPartyLinkSnippetTypeEnum;
}

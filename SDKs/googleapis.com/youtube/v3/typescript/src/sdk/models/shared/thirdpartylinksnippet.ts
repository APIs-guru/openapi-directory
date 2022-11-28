import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelToStoreLinkDetails } from "./channeltostorelinkdetails";


export enum ThirdPartyLinkSnippetTypeEnum {
    LinkUnspecified = "linkUnspecified",
    ChannelToStoreLink = "channelToStoreLink"
}


// ThirdPartyLinkSnippet
/** 
 * Basic information about a third party account link, including its type and type-specific information.
**/
export class ThirdPartyLinkSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelToStoreLink" })
  channelToStoreLink?: ChannelToStoreLinkDetails;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ThirdPartyLinkSnippetTypeEnum;
}

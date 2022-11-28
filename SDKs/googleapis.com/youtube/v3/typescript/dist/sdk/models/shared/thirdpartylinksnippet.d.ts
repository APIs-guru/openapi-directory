import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelToStoreLinkDetails } from "./channeltostorelinkdetails";
export declare enum ThirdPartyLinkSnippetTypeEnum {
    LinkUnspecified = "linkUnspecified",
    ChannelToStoreLink = "channelToStoreLink"
}
/**
 * Basic information about a third party account link, including its type and type-specific information.
**/
export declare class ThirdPartyLinkSnippet extends SpeakeasyBase {
    channelToStoreLink?: ChannelToStoreLinkDetails;
    type?: ThirdPartyLinkSnippetTypeEnum;
}

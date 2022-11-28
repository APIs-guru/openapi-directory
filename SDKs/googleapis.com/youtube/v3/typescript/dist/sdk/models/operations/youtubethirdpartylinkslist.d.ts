import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum YoutubeThirdPartyLinksListTypeEnum {
    LinkUnspecified = "linkUnspecified",
    ChannelToStoreLink = "channelToStoreLink"
}
export declare class YoutubeThirdPartyLinksListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    externalChannelId?: string;
    fields?: string;
    key?: string;
    linkingToken?: string;
    oauthToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    type?: YoutubeThirdPartyLinksListTypeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeThirdPartyLinksListRequest extends SpeakeasyBase {
    queryParams: YoutubeThirdPartyLinksListQueryParams;
}
export declare class YoutubeThirdPartyLinksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    thirdPartyLinkListResponse?: shared.ThirdPartyLinkListResponse;
}

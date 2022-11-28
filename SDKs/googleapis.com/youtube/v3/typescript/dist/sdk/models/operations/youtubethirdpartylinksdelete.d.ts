import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum YoutubeThirdPartyLinksDeleteTypeEnum {
    LinkUnspecified = "linkUnspecified",
    ChannelToStoreLink = "channelToStoreLink"
}
export declare class YoutubeThirdPartyLinksDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    externalChannelId?: string;
    fields?: string;
    key?: string;
    linkingToken: string;
    oauthToken?: string;
    part?: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    type: YoutubeThirdPartyLinksDeleteTypeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeThirdPartyLinksDeleteRequest extends SpeakeasyBase {
    queryParams: YoutubeThirdPartyLinksDeleteQueryParams;
}
export declare class YoutubeThirdPartyLinksDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

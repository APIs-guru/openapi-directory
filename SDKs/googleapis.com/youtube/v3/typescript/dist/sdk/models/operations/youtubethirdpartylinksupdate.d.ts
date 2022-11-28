import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeThirdPartyLinksUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    externalChannelId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    part: string[];
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class YoutubeThirdPartyLinksUpdateRequest extends SpeakeasyBase {
    queryParams: YoutubeThirdPartyLinksUpdateQueryParams;
    request?: shared.ThirdPartyLink;
}
export declare class YoutubeThirdPartyLinksUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    thirdPartyLink?: shared.ThirdPartyLink;
}

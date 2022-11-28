import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class YoutubeThirdPartyLinksInsertQueryParams extends SpeakeasyBase {
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
export declare class YoutubeThirdPartyLinksInsertRequest extends SpeakeasyBase {
    queryParams: YoutubeThirdPartyLinksInsertQueryParams;
    request?: shared.ThirdPartyLink;
}
export declare class YoutubeThirdPartyLinksInsertResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    thirdPartyLink?: shared.ThirdPartyLink;
}

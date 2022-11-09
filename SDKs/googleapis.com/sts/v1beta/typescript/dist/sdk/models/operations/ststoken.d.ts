import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class StsTokenQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class StsTokenRequest extends SpeakeasyBase {
    queryParams: StsTokenQueryParams;
    request?: shared.GoogleIdentityStsV1betaExchangeTokenRequest;
}
export declare class StsTokenResponse extends SpeakeasyBase {
    contentType: string;
    googleIdentityStsV1betaExchangeTokenResponse?: shared.GoogleIdentityStsV1betaExchangeTokenResponse;
    statusCode: number;
}

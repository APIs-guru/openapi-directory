import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DigitalassetlinksAssetlinksCheckQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    relation?: string;
    sourceAndroidAppCertificateSha256Fingerprint?: string;
    sourceAndroidAppPackageName?: string;
    sourceWebSite?: string;
    targetAndroidAppCertificateSha256Fingerprint?: string;
    targetAndroidAppPackageName?: string;
    targetWebSite?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DigitalassetlinksAssetlinksCheckRequest extends SpeakeasyBase {
    queryParams: DigitalassetlinksAssetlinksCheckQueryParams;
}
export declare class DigitalassetlinksAssetlinksCheckResponse extends SpeakeasyBase {
    checkResponse?: shared.CheckResponse;
    contentType: string;
    statusCode: number;
}

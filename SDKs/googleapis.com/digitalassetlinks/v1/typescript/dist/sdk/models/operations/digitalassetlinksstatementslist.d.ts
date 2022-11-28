import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DigitalassetlinksStatementsListQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DigitalassetlinksStatementsListRequest extends SpeakeasyBase {
    queryParams: DigitalassetlinksStatementsListQueryParams;
}
export declare class DigitalassetlinksStatementsListResponse extends SpeakeasyBase {
    contentType: string;
    listResponse?: shared.ListResponse;
    statusCode: number;
}

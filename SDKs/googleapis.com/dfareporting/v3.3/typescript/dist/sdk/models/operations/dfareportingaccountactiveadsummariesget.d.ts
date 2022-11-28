import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingAccountActiveAdSummariesGetPathParams extends SpeakeasyBase {
    profileId: string;
    summaryAccountId: string;
}
export declare class DfareportingAccountActiveAdSummariesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingAccountActiveAdSummariesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingAccountActiveAdSummariesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingAccountActiveAdSummariesGetPathParams;
    queryParams: DfareportingAccountActiveAdSummariesGetQueryParams;
    security: DfareportingAccountActiveAdSummariesGetSecurity;
}
export declare class DfareportingAccountActiveAdSummariesGetResponse extends SpeakeasyBase {
    accountActiveAdSummary?: shared.AccountActiveAdSummary;
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingBillingRatesListPathParams extends SpeakeasyBase {
    billingProfileId: string;
    profileId: string;
}
export declare class DfareportingBillingRatesListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingBillingRatesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingBillingRatesListRequest extends SpeakeasyBase {
    pathParams: DfareportingBillingRatesListPathParams;
    queryParams: DfareportingBillingRatesListQueryParams;
    security: DfareportingBillingRatesListSecurity;
}
export declare class DfareportingBillingRatesListResponse extends SpeakeasyBase {
    billingRatesListResponse?: shared.BillingRatesListResponse;
    contentType: string;
    statusCode: number;
}

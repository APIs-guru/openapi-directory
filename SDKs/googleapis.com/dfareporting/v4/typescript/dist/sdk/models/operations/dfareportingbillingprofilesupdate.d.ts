import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingBillingProfilesUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingBillingProfilesUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingBillingProfilesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingBillingProfilesUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingBillingProfilesUpdatePathParams;
    queryParams: DfareportingBillingProfilesUpdateQueryParams;
    request?: shared.BillingProfile;
    security: DfareportingBillingProfilesUpdateSecurity;
}
export declare class DfareportingBillingProfilesUpdateResponse extends SpeakeasyBase {
    billingProfile?: shared.BillingProfile;
    contentType: string;
    statusCode: number;
}

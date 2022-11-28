import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingBillingProfilesGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingBillingProfilesGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingBillingProfilesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingBillingProfilesGetRequest extends SpeakeasyBase {
    pathParams: DfareportingBillingProfilesGetPathParams;
    queryParams: DfareportingBillingProfilesGetQueryParams;
    security: DfareportingBillingProfilesGetSecurity;
}
export declare class DfareportingBillingProfilesGetResponse extends SpeakeasyBase {
    billingProfile?: shared.BillingProfile;
    contentType: string;
    statusCode: number;
}

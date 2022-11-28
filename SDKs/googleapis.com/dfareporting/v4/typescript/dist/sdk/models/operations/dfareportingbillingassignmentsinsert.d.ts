import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingBillingAssignmentsInsertPathParams extends SpeakeasyBase {
    billingProfileId: string;
    profileId: string;
}
export declare class DfareportingBillingAssignmentsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingBillingAssignmentsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingBillingAssignmentsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingBillingAssignmentsInsertPathParams;
    queryParams: DfareportingBillingAssignmentsInsertQueryParams;
    request?: shared.BillingAssignment;
    security: DfareportingBillingAssignmentsInsertSecurity;
}
export declare class DfareportingBillingAssignmentsInsertResponse extends SpeakeasyBase {
    billingAssignment?: shared.BillingAssignment;
    contentType: string;
    statusCode: number;
}

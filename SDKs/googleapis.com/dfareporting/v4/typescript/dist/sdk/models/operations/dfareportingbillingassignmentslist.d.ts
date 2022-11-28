import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingBillingAssignmentsListPathParams extends SpeakeasyBase {
    billingProfileId: string;
    profileId: string;
}
export declare class DfareportingBillingAssignmentsListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingBillingAssignmentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingBillingAssignmentsListRequest extends SpeakeasyBase {
    pathParams: DfareportingBillingAssignmentsListPathParams;
    queryParams: DfareportingBillingAssignmentsListQueryParams;
    security: DfareportingBillingAssignmentsListSecurity;
}
export declare class DfareportingBillingAssignmentsListResponse extends SpeakeasyBase {
    billingAssignmentsListResponse?: shared.BillingAssignmentsListResponse;
    contentType: string;
    statusCode: number;
}

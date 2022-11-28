import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetViewEnum {
    InventoryViewUnspecified = "INVENTORY_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetQueryParams extends SpeakeasyBase {
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
    view?: OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetViewEnum;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetPathParams;
    queryParams: OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetQueryParams;
    security: OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetSecurity;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

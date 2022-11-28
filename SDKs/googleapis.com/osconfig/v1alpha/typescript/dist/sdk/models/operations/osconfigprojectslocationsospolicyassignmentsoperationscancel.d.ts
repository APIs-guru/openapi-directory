import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelPathParams;
    queryParams: OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelSecurity;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}

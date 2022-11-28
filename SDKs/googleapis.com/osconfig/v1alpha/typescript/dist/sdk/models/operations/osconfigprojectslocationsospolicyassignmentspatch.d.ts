import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsLocationsOsPolicyAssignmentsPatchPathParams;
    queryParams: OsconfigProjectsLocationsOsPolicyAssignmentsPatchQueryParams;
    request?: shared.OsPolicyAssignmentInput;
    security: OsconfigProjectsLocationsOsPolicyAssignmentsPatchSecurity;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

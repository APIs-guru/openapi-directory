import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    osPolicyAssignmentId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsLocationsOsPolicyAssignmentsCreatePathParams;
    queryParams: OsconfigProjectsLocationsOsPolicyAssignmentsCreateQueryParams;
    request?: shared.OsPolicyAssignmentInput;
    security: OsconfigProjectsLocationsOsPolicyAssignmentsCreateSecurity;
}
export declare class OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

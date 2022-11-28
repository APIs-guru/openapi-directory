import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PolicysimulatorProjectsLocationsReplaysCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PolicysimulatorProjectsLocationsReplaysCreateQueryParams extends SpeakeasyBase {
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
export declare class PolicysimulatorProjectsLocationsReplaysCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PolicysimulatorProjectsLocationsReplaysCreateRequest extends SpeakeasyBase {
    pathParams: PolicysimulatorProjectsLocationsReplaysCreatePathParams;
    queryParams: PolicysimulatorProjectsLocationsReplaysCreateQueryParams;
    request?: shared.GoogleCloudPolicysimulatorV1beta1ReplayInput;
    security: PolicysimulatorProjectsLocationsReplaysCreateSecurity;
}
export declare class PolicysimulatorProjectsLocationsReplaysCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

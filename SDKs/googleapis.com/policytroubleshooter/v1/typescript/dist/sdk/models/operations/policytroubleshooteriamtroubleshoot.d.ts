import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PolicytroubleshooterIamTroubleshootQueryParams extends SpeakeasyBase {
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
export declare class PolicytroubleshooterIamTroubleshootSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PolicytroubleshooterIamTroubleshootRequest extends SpeakeasyBase {
    queryParams: PolicytroubleshooterIamTroubleshootQueryParams;
    request?: shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyRequest;
    security: PolicytroubleshooterIamTroubleshootSecurity;
}
export declare class PolicytroubleshooterIamTroubleshootResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse?: shared.GoogleCloudPolicytroubleshooterV1TroubleshootIamPolicyResponse;
    statusCode: number;
}

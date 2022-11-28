import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityInboundSsoAssignmentsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudidentityInboundSsoAssignmentsPatchQueryParams extends SpeakeasyBase {
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
export declare class CloudidentityInboundSsoAssignmentsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityInboundSsoAssignmentsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityInboundSsoAssignmentsPatchSecurity extends SpeakeasyBase {
    option1?: CloudidentityInboundSsoAssignmentsPatchSecurityOption1;
    option2?: CloudidentityInboundSsoAssignmentsPatchSecurityOption2;
}
export declare class CloudidentityInboundSsoAssignmentsPatchRequest extends SpeakeasyBase {
    pathParams: CloudidentityInboundSsoAssignmentsPatchPathParams;
    queryParams: CloudidentityInboundSsoAssignmentsPatchQueryParams;
    request?: shared.InboundSsoAssignmentInput;
    security: CloudidentityInboundSsoAssignmentsPatchSecurity;
}
export declare class CloudidentityInboundSsoAssignmentsPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

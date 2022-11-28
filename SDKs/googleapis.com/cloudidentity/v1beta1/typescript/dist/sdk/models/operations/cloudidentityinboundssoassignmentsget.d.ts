import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityInboundSsoAssignmentsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudidentityInboundSsoAssignmentsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityInboundSsoAssignmentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityInboundSsoAssignmentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityInboundSsoAssignmentsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityInboundSsoAssignmentsGetSecurity extends SpeakeasyBase {
    option1?: CloudidentityInboundSsoAssignmentsGetSecurityOption1;
    option2?: CloudidentityInboundSsoAssignmentsGetSecurityOption2;
    option3?: CloudidentityInboundSsoAssignmentsGetSecurityOption3;
}
export declare class CloudidentityInboundSsoAssignmentsGetRequest extends SpeakeasyBase {
    pathParams: CloudidentityInboundSsoAssignmentsGetPathParams;
    queryParams: CloudidentityInboundSsoAssignmentsGetQueryParams;
    security: CloudidentityInboundSsoAssignmentsGetSecurity;
}
export declare class CloudidentityInboundSsoAssignmentsGetResponse extends SpeakeasyBase {
    contentType: string;
    inboundSsoAssignment?: shared.InboundSsoAssignment;
    statusCode: number;
}

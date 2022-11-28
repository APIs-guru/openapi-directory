import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityInboundSsoAssignmentsCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudidentityInboundSsoAssignmentsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityInboundSsoAssignmentsCreateRequest extends SpeakeasyBase {
    queryParams: CloudidentityInboundSsoAssignmentsCreateQueryParams;
    request?: shared.InboundSsoAssignmentInput;
    security: CloudidentityInboundSsoAssignmentsCreateSecurity;
}
export declare class CloudidentityInboundSsoAssignmentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

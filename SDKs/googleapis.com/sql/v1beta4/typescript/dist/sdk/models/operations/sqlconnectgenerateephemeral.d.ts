import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SqlConnectGenerateEphemeralPathParams extends SpeakeasyBase {
    instance: string;
    project: string;
}
export declare class SqlConnectGenerateEphemeralQueryParams extends SpeakeasyBase {
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
export declare class SqlConnectGenerateEphemeralSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlConnectGenerateEphemeralSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SqlConnectGenerateEphemeralSecurity extends SpeakeasyBase {
    option1?: SqlConnectGenerateEphemeralSecurityOption1;
    option2?: SqlConnectGenerateEphemeralSecurityOption2;
}
export declare class SqlConnectGenerateEphemeralRequest extends SpeakeasyBase {
    pathParams: SqlConnectGenerateEphemeralPathParams;
    queryParams: SqlConnectGenerateEphemeralQueryParams;
    request?: shared.GenerateEphemeralCertRequest;
    security: SqlConnectGenerateEphemeralSecurity;
}
export declare class SqlConnectGenerateEphemeralResponse extends SpeakeasyBase {
    contentType: string;
    generateEphemeralCertResponse?: shared.GenerateEphemeralCertResponse;
    statusCode: number;
}

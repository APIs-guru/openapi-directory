import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityInboundSamlSsoProfilesIdpCredentialsAddPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams extends SpeakeasyBase {
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
export declare class CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest extends SpeakeasyBase {
    pathParams: CloudidentityInboundSamlSsoProfilesIdpCredentialsAddPathParams;
    queryParams: CloudidentityInboundSamlSsoProfilesIdpCredentialsAddQueryParams;
    request?: shared.AddIdpCredentialRequest;
    security: CloudidentityInboundSamlSsoProfilesIdpCredentialsAddSecurity;
}
export declare class CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudidentityInboundSamlSsoProfilesIdpCredentialsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest extends SpeakeasyBase {
    pathParams: CloudidentityInboundSamlSsoProfilesIdpCredentialsListPathParams;
    queryParams: CloudidentityInboundSamlSsoProfilesIdpCredentialsListQueryParams;
    security: CloudidentityInboundSamlSsoProfilesIdpCredentialsListSecurity;
}
export declare class CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse extends SpeakeasyBase {
    contentType: string;
    listIdpCredentialsResponse?: shared.ListIdpCredentialsResponse;
    statusCode: number;
}

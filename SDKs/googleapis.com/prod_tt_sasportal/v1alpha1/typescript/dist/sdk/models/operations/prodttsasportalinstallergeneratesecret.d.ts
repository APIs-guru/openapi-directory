import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalInstallerGenerateSecretQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalInstallerGenerateSecretSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalInstallerGenerateSecretRequest extends SpeakeasyBase {
    queryParams: ProdTtSasportalInstallerGenerateSecretQueryParams;
    request?: Map<string, any>;
    security: ProdTtSasportalInstallerGenerateSecretSecurity;
}
export declare class ProdTtSasportalInstallerGenerateSecretResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalGenerateSecretResponse?: shared.SasPortalGenerateSecretResponse;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProdTtSasportalInstallerValidateQueryParams extends SpeakeasyBase {
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
export declare class ProdTtSasportalInstallerValidateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ProdTtSasportalInstallerValidateRequest extends SpeakeasyBase {
    queryParams: ProdTtSasportalInstallerValidateQueryParams;
    request?: shared.SasPortalValidateInstallerRequest;
    security: ProdTtSasportalInstallerValidateSecurity;
}
export declare class ProdTtSasportalInstallerValidateResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalValidateInstallerResponse?: Map<string, any>;
    statusCode: number;
}

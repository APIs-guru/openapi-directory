import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SasportalInstallerValidateQueryParams extends SpeakeasyBase {
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
export declare class SasportalInstallerValidateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class SasportalInstallerValidateRequest extends SpeakeasyBase {
    queryParams: SasportalInstallerValidateQueryParams;
    request?: shared.SasPortalValidateInstallerRequest;
    security: SasportalInstallerValidateSecurity;
}
export declare class SasportalInstallerValidateResponse extends SpeakeasyBase {
    contentType: string;
    sasPortalValidateInstallerResponse?: Map<string, any>;
    statusCode: number;
}

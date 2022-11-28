import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsconfigProjectsPatchDeploymentsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class OsconfigProjectsPatchDeploymentsDeleteQueryParams extends SpeakeasyBase {
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
export declare class OsconfigProjectsPatchDeploymentsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class OsconfigProjectsPatchDeploymentsDeleteRequest extends SpeakeasyBase {
    pathParams: OsconfigProjectsPatchDeploymentsDeletePathParams;
    queryParams: OsconfigProjectsPatchDeploymentsDeleteQueryParams;
    security: OsconfigProjectsPatchDeploymentsDeleteSecurity;
}
export declare class OsconfigProjectsPatchDeploymentsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}

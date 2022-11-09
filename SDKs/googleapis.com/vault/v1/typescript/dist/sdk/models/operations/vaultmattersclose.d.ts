import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultMattersClosePathParams extends SpeakeasyBase {
    matterId: string;
}
export declare class VaultMattersCloseQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersCloseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersCloseRequest extends SpeakeasyBase {
    pathParams: VaultMattersClosePathParams;
    queryParams: VaultMattersCloseQueryParams;
    request?: Map<string, any>;
    security: VaultMattersCloseSecurity;
}
export declare class VaultMattersCloseResponse extends SpeakeasyBase {
    closeMatterResponse?: shared.CloseMatterResponse;
    contentType: string;
    statusCode: number;
}

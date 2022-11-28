import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VaultMattersCountPathParams extends SpeakeasyBase {
    matterId: string;
}
export declare class VaultMattersCountQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersCountSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersCountRequest extends SpeakeasyBase {
    pathParams: VaultMattersCountPathParams;
    queryParams: VaultMattersCountQueryParams;
    request?: shared.CountArtifactsRequest;
    security: VaultMattersCountSecurity;
}
export declare class VaultMattersCountResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

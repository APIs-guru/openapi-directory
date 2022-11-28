import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VaultMattersHoldsDeletePathParams extends SpeakeasyBase {
    holdId: string;
    matterId: string;
}
export declare class VaultMattersHoldsDeleteQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersHoldsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersHoldsDeleteRequest extends SpeakeasyBase {
    pathParams: VaultMattersHoldsDeletePathParams;
    queryParams: VaultMattersHoldsDeleteQueryParams;
    security: VaultMattersHoldsDeleteSecurity;
}
export declare class VaultMattersHoldsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}

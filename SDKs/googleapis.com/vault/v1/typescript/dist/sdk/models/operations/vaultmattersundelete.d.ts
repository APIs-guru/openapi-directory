import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VaultMattersUndeletePathParams extends SpeakeasyBase {
    matterId: string;
}
export declare class VaultMattersUndeleteQueryParams extends SpeakeasyBase {
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
export declare class VaultMattersUndeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VaultMattersUndeleteRequest extends SpeakeasyBase {
    pathParams: VaultMattersUndeletePathParams;
    queryParams: VaultMattersUndeleteQueryParams;
    request?: Map<string, any>;
    security: VaultMattersUndeleteSecurity;
}
export declare class VaultMattersUndeleteResponse extends SpeakeasyBase {
    contentType: string;
    matter?: shared.Matter;
    statusCode: number;
}

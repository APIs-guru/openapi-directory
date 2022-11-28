import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsReturncarrierPatchPathParams extends SpeakeasyBase {
    accountId: string;
    carrierAccountId: string;
}
export declare class ContentAccountsReturncarrierPatchQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsReturncarrierPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsReturncarrierPatchRequest extends SpeakeasyBase {
    pathParams: ContentAccountsReturncarrierPatchPathParams;
    queryParams: ContentAccountsReturncarrierPatchQueryParams;
    request?: shared.AccountReturnCarrierInput;
    security: ContentAccountsReturncarrierPatchSecurity;
}
export declare class ContentAccountsReturncarrierPatchResponse extends SpeakeasyBase {
    accountReturnCarrier?: shared.AccountReturnCarrier;
    contentType: string;
    statusCode: number;
}

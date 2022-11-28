import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsReturncarrierCreatePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ContentAccountsReturncarrierCreateQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsReturncarrierCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsReturncarrierCreateRequest extends SpeakeasyBase {
    pathParams: ContentAccountsReturncarrierCreatePathParams;
    queryParams: ContentAccountsReturncarrierCreateQueryParams;
    request?: shared.AccountReturnCarrierInput;
    security: ContentAccountsReturncarrierCreateSecurity;
}
export declare class ContentAccountsReturncarrierCreateResponse extends SpeakeasyBase {
    accountReturnCarrier?: shared.AccountReturnCarrier;
    contentType: string;
    statusCode: number;
}

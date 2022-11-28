import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsReturncarrierDeletePathParams extends SpeakeasyBase {
    accountId: string;
    carrierAccountId: string;
}
export declare class ContentAccountsReturncarrierDeleteQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsReturncarrierDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsReturncarrierDeleteRequest extends SpeakeasyBase {
    pathParams: ContentAccountsReturncarrierDeletePathParams;
    queryParams: ContentAccountsReturncarrierDeleteQueryParams;
    security: ContentAccountsReturncarrierDeleteSecurity;
}
export declare class ContentAccountsReturncarrierDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

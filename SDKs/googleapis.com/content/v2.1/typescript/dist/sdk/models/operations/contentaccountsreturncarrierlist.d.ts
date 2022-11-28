import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsReturncarrierListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ContentAccountsReturncarrierListQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsReturncarrierListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsReturncarrierListRequest extends SpeakeasyBase {
    pathParams: ContentAccountsReturncarrierListPathParams;
    queryParams: ContentAccountsReturncarrierListQueryParams;
    security: ContentAccountsReturncarrierListSecurity;
}
export declare class ContentAccountsReturncarrierListResponse extends SpeakeasyBase {
    contentType: string;
    listAccountReturnCarrierResponse?: shared.ListAccountReturnCarrierResponse;
    statusCode: number;
}

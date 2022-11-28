import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsLabelsPatchPathParams extends SpeakeasyBase {
    accountId: string;
    labelId: string;
}
export declare class ContentAccountsLabelsPatchQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsLabelsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsLabelsPatchRequest extends SpeakeasyBase {
    pathParams: ContentAccountsLabelsPatchPathParams;
    queryParams: ContentAccountsLabelsPatchQueryParams;
    request?: shared.AccountLabelInput;
    security: ContentAccountsLabelsPatchSecurity;
}
export declare class ContentAccountsLabelsPatchResponse extends SpeakeasyBase {
    accountLabel?: shared.AccountLabel;
    contentType: string;
    statusCode: number;
}

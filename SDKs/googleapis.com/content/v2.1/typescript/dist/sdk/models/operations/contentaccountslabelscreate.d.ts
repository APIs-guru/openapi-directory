import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsLabelsCreatePathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ContentAccountsLabelsCreateQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsLabelsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsLabelsCreateRequest extends SpeakeasyBase {
    pathParams: ContentAccountsLabelsCreatePathParams;
    queryParams: ContentAccountsLabelsCreateQueryParams;
    request?: shared.AccountLabelInput;
    security: ContentAccountsLabelsCreateSecurity;
}
export declare class ContentAccountsLabelsCreateResponse extends SpeakeasyBase {
    accountLabel?: shared.AccountLabel;
    contentType: string;
    statusCode: number;
}

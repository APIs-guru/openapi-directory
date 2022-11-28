import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsLabelsDeletePathParams extends SpeakeasyBase {
    accountId: string;
    labelId: string;
}
export declare class ContentAccountsLabelsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsLabelsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsLabelsDeleteRequest extends SpeakeasyBase {
    pathParams: ContentAccountsLabelsDeletePathParams;
    queryParams: ContentAccountsLabelsDeleteQueryParams;
    security: ContentAccountsLabelsDeleteSecurity;
}
export declare class ContentAccountsLabelsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

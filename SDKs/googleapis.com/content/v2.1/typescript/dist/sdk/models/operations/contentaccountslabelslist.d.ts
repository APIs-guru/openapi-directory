import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsLabelsListPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class ContentAccountsLabelsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentAccountsLabelsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsLabelsListRequest extends SpeakeasyBase {
    pathParams: ContentAccountsLabelsListPathParams;
    queryParams: ContentAccountsLabelsListQueryParams;
    security: ContentAccountsLabelsListSecurity;
}
export declare class ContentAccountsLabelsListResponse extends SpeakeasyBase {
    contentType: string;
    listAccountLabelsResponse?: shared.ListAccountLabelsResponse;
    statusCode: number;
}

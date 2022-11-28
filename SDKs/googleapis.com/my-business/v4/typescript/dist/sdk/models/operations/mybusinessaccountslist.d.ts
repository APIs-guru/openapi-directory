import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessAccountsListRequest extends SpeakeasyBase {
    queryParams: MybusinessAccountsListQueryParams;
}
export declare class MybusinessAccountsListResponse extends SpeakeasyBase {
    contentType: string;
    listAccountsResponse?: shared.ListAccountsResponse;
    statusCode: number;
}

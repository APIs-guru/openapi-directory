import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessaccountmanagementAccountsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    parentAccount?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessaccountmanagementAccountsListRequest extends SpeakeasyBase {
    queryParams: MybusinessaccountmanagementAccountsListQueryParams;
}
export declare class MybusinessaccountmanagementAccountsListResponse extends SpeakeasyBase {
    contentType: string;
    listAccountsResponse?: shared.ListAccountsResponse;
    statusCode: number;
}

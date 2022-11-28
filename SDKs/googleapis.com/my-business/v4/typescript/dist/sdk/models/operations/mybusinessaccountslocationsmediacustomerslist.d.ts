import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsMediaCustomersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsMediaCustomersListQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsMediaCustomersListRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsMediaCustomersListPathParams;
    queryParams: MybusinessAccountsLocationsMediaCustomersListQueryParams;
}
export declare class MybusinessAccountsLocationsMediaCustomersListResponse extends SpeakeasyBase {
    contentType: string;
    listCustomerMediaItemsResponse?: shared.ListCustomerMediaItemsResponse;
    statusCode: number;
}

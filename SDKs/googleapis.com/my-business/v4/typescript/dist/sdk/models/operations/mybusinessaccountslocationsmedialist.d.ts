import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsMediaListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsMediaListQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsMediaListRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsMediaListPathParams;
    queryParams: MybusinessAccountsLocationsMediaListQueryParams;
}
export declare class MybusinessAccountsLocationsMediaListResponse extends SpeakeasyBase {
    contentType: string;
    listMediaItemsResponse?: shared.ListMediaItemsResponse;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsVerificationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsVerificationsListQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsVerificationsListRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsVerificationsListPathParams;
    queryParams: MybusinessAccountsLocationsVerificationsListQueryParams;
}
export declare class MybusinessAccountsLocationsVerificationsListResponse extends SpeakeasyBase {
    contentType: string;
    listVerificationsResponse?: shared.ListVerificationsResponse;
    statusCode: number;
}

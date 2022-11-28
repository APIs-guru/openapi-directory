import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessbusinessinformationAccountsLocationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessbusinessinformationAccountsLocationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    readMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessbusinessinformationAccountsLocationsListRequest extends SpeakeasyBase {
    pathParams: MybusinessbusinessinformationAccountsLocationsListPathParams;
    queryParams: MybusinessbusinessinformationAccountsLocationsListQueryParams;
}
export declare class MybusinessbusinessinformationAccountsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationsResponse?: shared.ListLocationsResponse;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsInsuranceNetworksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsInsuranceNetworksListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessAccountsLocationsInsuranceNetworksListRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsInsuranceNetworksListPathParams;
    queryParams: MybusinessAccountsLocationsInsuranceNetworksListQueryParams;
}
export declare class MybusinessAccountsLocationsInsuranceNetworksListResponse extends SpeakeasyBase {
    contentType: string;
    listInsuranceNetworksResponse?: shared.ListInsuranceNetworksResponse;
    statusCode: number;
}

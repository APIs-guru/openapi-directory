import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsLocationsAdminsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessAccountsLocationsAdminsListQueryParams extends SpeakeasyBase {
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
export declare class MybusinessAccountsLocationsAdminsListRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsLocationsAdminsListPathParams;
    queryParams: MybusinessAccountsLocationsAdminsListQueryParams;
}
export declare class MybusinessAccountsLocationsAdminsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationAdminsResponse?: shared.ListLocationAdminsResponse;
    statusCode: number;
}

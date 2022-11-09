import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessaccountmanagementLocationsAdminsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessaccountmanagementLocationsAdminsListQueryParams extends SpeakeasyBase {
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
export declare class MybusinessaccountmanagementLocationsAdminsListRequest extends SpeakeasyBase {
    pathParams: MybusinessaccountmanagementLocationsAdminsListPathParams;
    queryParams: MybusinessaccountmanagementLocationsAdminsListQueryParams;
}
export declare class MybusinessaccountmanagementLocationsAdminsListResponse extends SpeakeasyBase {
    contentType: string;
    listLocationAdminsResponse?: shared.ListLocationAdminsResponse;
    statusCode: number;
}

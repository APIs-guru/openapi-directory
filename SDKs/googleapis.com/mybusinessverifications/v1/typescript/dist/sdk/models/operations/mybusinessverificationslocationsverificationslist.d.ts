import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessverificationsLocationsVerificationsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessverificationsLocationsVerificationsListQueryParams extends SpeakeasyBase {
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
export declare class MybusinessverificationsLocationsVerificationsListRequest extends SpeakeasyBase {
    pathParams: MybusinessverificationsLocationsVerificationsListPathParams;
    queryParams: MybusinessverificationsLocationsVerificationsListQueryParams;
}
export declare class MybusinessverificationsLocationsVerificationsListResponse extends SpeakeasyBase {
    contentType: string;
    listVerificationsResponse?: shared.ListVerificationsResponse;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class RetailProjectsOperationsListQueryParams extends SpeakeasyBase {
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
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RetailProjectsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsOperationsListRequest extends SpeakeasyBase {
    pathParams: RetailProjectsOperationsListPathParams;
    queryParams: RetailProjectsOperationsListQueryParams;
    security: RetailProjectsOperationsListSecurity;
}
export declare class RetailProjectsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}

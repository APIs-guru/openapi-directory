import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatalabelingProjectsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatalabelingProjectsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class DatalabelingProjectsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatalabelingProjectsOperationsListRequest extends SpeakeasyBase {
    pathParams: DatalabelingProjectsOperationsListPathParams;
    queryParams: DatalabelingProjectsOperationsListQueryParams;
    security: DatalabelingProjectsOperationsListSecurity;
}
export declare class DatalabelingProjectsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}

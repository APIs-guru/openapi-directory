import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MlProjectsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MlProjectsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class MlProjectsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MlProjectsOperationsListRequest extends SpeakeasyBase {
    pathParams: MlProjectsOperationsListPathParams;
    queryParams: MlProjectsOperationsListQueryParams;
    security: MlProjectsOperationsListSecurity;
}
export declare class MlProjectsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}

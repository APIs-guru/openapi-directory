import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudfunctionsProjectsLocationsFunctionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudfunctionsProjectsLocationsFunctionsListQueryParams extends SpeakeasyBase {
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
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudfunctionsProjectsLocationsFunctionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudfunctionsProjectsLocationsFunctionsListRequest extends SpeakeasyBase {
    pathParams: CloudfunctionsProjectsLocationsFunctionsListPathParams;
    queryParams: CloudfunctionsProjectsLocationsFunctionsListQueryParams;
    security: CloudfunctionsProjectsLocationsFunctionsListSecurity;
}
export declare class CloudfunctionsProjectsLocationsFunctionsListResponse extends SpeakeasyBase {
    contentType: string;
    listFunctionsResponse?: shared.ListFunctionsResponse;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsControlsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsControlsListQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsControlsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsControlsListRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsControlsListPathParams;
    queryParams: RetailProjectsLocationsCatalogsControlsListQueryParams;
    security: RetailProjectsLocationsCatalogsControlsListSecurity;
}
export declare class RetailProjectsLocationsCatalogsControlsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2betaListControlsResponse?: shared.GoogleCloudRetailV2betaListControlsResponse;
    statusCode: number;
}

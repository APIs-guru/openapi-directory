import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsListQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsListRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsListPathParams;
    queryParams: RetailProjectsLocationsCatalogsListQueryParams;
    security: RetailProjectsLocationsCatalogsListSecurity;
}
export declare class RetailProjectsLocationsCatalogsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2ListCatalogsResponse?: shared.GoogleCloudRetailV2ListCatalogsResponse;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsCompleteQueryPathParams extends SpeakeasyBase {
    catalog: string;
}
export declare class RetailProjectsLocationsCatalogsCompleteQueryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dataset?: string;
    deviceType?: string;
    fields?: string;
    key?: string;
    languageCodes?: string[];
    maxSuggestions?: number;
    oauthToken?: string;
    prettyPrint?: boolean;
    query?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    visitorId?: string;
}
export declare class RetailProjectsLocationsCatalogsCompleteQuerySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsCompleteQueryRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsCompleteQueryPathParams;
    queryParams: RetailProjectsLocationsCatalogsCompleteQueryQueryParams;
    security: RetailProjectsLocationsCatalogsCompleteQuerySecurity;
}
export declare class RetailProjectsLocationsCatalogsCompleteQueryResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2CompleteQueryResponse?: shared.GoogleCloudRetailV2CompleteQueryResponse;
    statusCode: number;
}

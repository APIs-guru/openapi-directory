import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsServingConfigsPredictPathParams extends SpeakeasyBase {
    placement: string;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsServingConfigsPredictSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsPredictRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsServingConfigsPredictPathParams;
    queryParams: RetailProjectsLocationsCatalogsServingConfigsPredictQueryParams;
    request?: shared.GoogleCloudRetailV2alphaPredictRequestInput;
    security: RetailProjectsLocationsCatalogsServingConfigsPredictSecurity;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsPredictResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2alphaPredictResponse?: shared.GoogleCloudRetailV2alphaPredictResponse;
    statusCode: number;
}

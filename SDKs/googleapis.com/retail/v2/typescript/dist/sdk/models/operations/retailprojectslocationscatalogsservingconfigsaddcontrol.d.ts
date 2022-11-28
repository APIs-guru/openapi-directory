import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsServingConfigsAddControlPathParams extends SpeakeasyBase {
    servingConfig: string;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsAddControlRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsServingConfigsAddControlPathParams;
    queryParams: RetailProjectsLocationsCatalogsServingConfigsAddControlQueryParams;
    request?: shared.GoogleCloudRetailV2AddControlRequest;
    security: RetailProjectsLocationsCatalogsServingConfigsAddControlSecurity;
}
export declare class RetailProjectsLocationsCatalogsServingConfigsAddControlResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2ServingConfig?: shared.GoogleCloudRetailV2ServingConfig;
    statusCode: number;
}

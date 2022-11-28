import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsModelsPausePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RetailProjectsLocationsCatalogsModelsPauseQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsModelsPauseSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsModelsPauseRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsModelsPausePathParams;
    queryParams: RetailProjectsLocationsCatalogsModelsPauseQueryParams;
    request?: Map<string, any>;
    security: RetailProjectsLocationsCatalogsModelsPauseSecurity;
}
export declare class RetailProjectsLocationsCatalogsModelsPauseResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2alphaModel?: shared.GoogleCloudRetailV2alphaModel;
    statusCode: number;
}

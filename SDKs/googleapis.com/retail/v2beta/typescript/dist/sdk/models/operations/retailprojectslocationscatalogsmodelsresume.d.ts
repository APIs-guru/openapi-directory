import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsModelsResumePathParams extends SpeakeasyBase {
    name: string;
}
export declare class RetailProjectsLocationsCatalogsModelsResumeQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsModelsResumeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsModelsResumeRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsModelsResumePathParams;
    queryParams: RetailProjectsLocationsCatalogsModelsResumeQueryParams;
    request?: Map<string, any>;
    security: RetailProjectsLocationsCatalogsModelsResumeSecurity;
}
export declare class RetailProjectsLocationsCatalogsModelsResumeResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2betaModel?: shared.GoogleCloudRetailV2betaModel;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsControlsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsControlsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    controlId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class RetailProjectsLocationsCatalogsControlsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsControlsCreateRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsControlsCreatePathParams;
    queryParams: RetailProjectsLocationsCatalogsControlsCreateQueryParams;
    request?: shared.GoogleCloudRetailV2betaControlInput;
    security: RetailProjectsLocationsCatalogsControlsCreateSecurity;
}
export declare class RetailProjectsLocationsCatalogsControlsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2betaControl?: shared.GoogleCloudRetailV2betaControl;
    statusCode: number;
}

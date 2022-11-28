import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsUserEventsWritePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsUserEventsWriteQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsUserEventsWriteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsUserEventsWriteRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsUserEventsWritePathParams;
    queryParams: RetailProjectsLocationsCatalogsUserEventsWriteQueryParams;
    request?: shared.GoogleCloudRetailV2betaUserEventInput;
    security: RetailProjectsLocationsCatalogsUserEventsWriteSecurity;
}
export declare class RetailProjectsLocationsCatalogsUserEventsWriteResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudRetailV2betaUserEvent?: shared.GoogleCloudRetailV2betaUserEvent;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsUserEventsImportPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsUserEventsImportQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsUserEventsImportSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsUserEventsImportRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsUserEventsImportPathParams;
    queryParams: RetailProjectsLocationsCatalogsUserEventsImportQueryParams;
    request?: shared.GoogleCloudRetailV2alphaImportUserEventsRequestInput;
    security: RetailProjectsLocationsCatalogsUserEventsImportSecurity;
}
export declare class RetailProjectsLocationsCatalogsUserEventsImportResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

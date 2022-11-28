import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsUserEventsPurgePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams extends SpeakeasyBase {
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
export declare class RetailProjectsLocationsCatalogsUserEventsPurgeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsUserEventsPurgeRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsUserEventsPurgePathParams;
    queryParams: RetailProjectsLocationsCatalogsUserEventsPurgeQueryParams;
    request?: shared.GoogleCloudRetailV2betaPurgeUserEventsRequest;
    security: RetailProjectsLocationsCatalogsUserEventsPurgeSecurity;
}
export declare class RetailProjectsLocationsCatalogsUserEventsPurgeResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetailProjectsLocationsCatalogsUserEventsCollectPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class RetailProjectsLocationsCatalogsUserEventsCollectQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    ets?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prebuiltRule?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    rawJson?: string;
    uploadType?: string;
    uploadProtocol?: string;
    uri?: string;
    userEvent?: string;
}
export declare class RetailProjectsLocationsCatalogsUserEventsCollectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class RetailProjectsLocationsCatalogsUserEventsCollectRequest extends SpeakeasyBase {
    pathParams: RetailProjectsLocationsCatalogsUserEventsCollectPathParams;
    queryParams: RetailProjectsLocationsCatalogsUserEventsCollectQueryParams;
    security: RetailProjectsLocationsCatalogsUserEventsCollectSecurity;
}
export declare class RetailProjectsLocationsCatalogsUserEventsCollectResponse extends SpeakeasyBase {
    contentType: string;
    googleApiHttpBody?: shared.GoogleApiHttpBody;
    statusCode: number;
}

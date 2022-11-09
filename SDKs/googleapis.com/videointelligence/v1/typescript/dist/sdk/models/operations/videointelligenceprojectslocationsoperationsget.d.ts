import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VideointelligenceProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class VideointelligenceProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class VideointelligenceProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VideointelligenceProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: VideointelligenceProjectsLocationsOperationsGetPathParams;
    queryParams: VideointelligenceProjectsLocationsOperationsGetQueryParams;
    security: VideointelligenceProjectsLocationsOperationsGetSecurity;
}
export declare class VideointelligenceProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

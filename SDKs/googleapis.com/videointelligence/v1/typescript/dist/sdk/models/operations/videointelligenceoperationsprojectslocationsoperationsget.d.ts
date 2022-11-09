import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VideointelligenceOperationsProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class VideointelligenceOperationsProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
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
export declare class VideointelligenceOperationsProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VideointelligenceOperationsProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: VideointelligenceOperationsProjectsLocationsOperationsGetPathParams;
    queryParams: VideointelligenceOperationsProjectsLocationsOperationsGetQueryParams;
    security: VideointelligenceOperationsProjectsLocationsOperationsGetSecurity;
}
export declare class VideointelligenceOperationsProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

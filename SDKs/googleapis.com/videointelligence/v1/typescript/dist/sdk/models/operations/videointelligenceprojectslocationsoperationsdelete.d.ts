import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VideointelligenceProjectsLocationsOperationsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class VideointelligenceProjectsLocationsOperationsDeleteQueryParams extends SpeakeasyBase {
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
export declare class VideointelligenceProjectsLocationsOperationsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VideointelligenceProjectsLocationsOperationsDeleteRequest extends SpeakeasyBase {
    pathParams: VideointelligenceProjectsLocationsOperationsDeletePathParams;
    queryParams: VideointelligenceProjectsLocationsOperationsDeleteQueryParams;
    security: VideointelligenceProjectsLocationsOperationsDeleteSecurity;
}
export declare class VideointelligenceProjectsLocationsOperationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class VideointelligenceOperationsProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams;
    queryParams: VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams;
    security: VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity;
}
export declare class VideointelligenceOperationsProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}

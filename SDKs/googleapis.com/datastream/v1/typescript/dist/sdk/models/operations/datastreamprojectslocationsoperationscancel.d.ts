import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DatastreamProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsOperationsCancelPathParams;
    queryParams: DatastreamProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: DatastreamProjectsLocationsOperationsCancelSecurity;
}
export declare class DatastreamProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}

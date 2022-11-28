import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatastreamProjectsLocationsStreamsFetchErrorsPathParams extends SpeakeasyBase {
    stream: string;
}
export declare class DatastreamProjectsLocationsStreamsFetchErrorsQueryParams extends SpeakeasyBase {
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
export declare class DatastreamProjectsLocationsStreamsFetchErrorsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatastreamProjectsLocationsStreamsFetchErrorsRequest extends SpeakeasyBase {
    pathParams: DatastreamProjectsLocationsStreamsFetchErrorsPathParams;
    queryParams: DatastreamProjectsLocationsStreamsFetchErrorsQueryParams;
    request?: Map<string, any>;
    security: DatastreamProjectsLocationsStreamsFetchErrorsSecurity;
}
export declare class DatastreamProjectsLocationsStreamsFetchErrorsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

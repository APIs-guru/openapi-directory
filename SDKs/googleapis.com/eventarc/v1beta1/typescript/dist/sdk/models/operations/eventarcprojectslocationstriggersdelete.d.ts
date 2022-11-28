import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EventarcProjectsLocationsTriggersDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class EventarcProjectsLocationsTriggersDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowMissing?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    etag?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class EventarcProjectsLocationsTriggersDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EventarcProjectsLocationsTriggersDeleteRequest extends SpeakeasyBase {
    pathParams: EventarcProjectsLocationsTriggersDeletePathParams;
    queryParams: EventarcProjectsLocationsTriggersDeleteQueryParams;
    security: EventarcProjectsLocationsTriggersDeleteSecurity;
}
export declare class EventarcProjectsLocationsTriggersDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

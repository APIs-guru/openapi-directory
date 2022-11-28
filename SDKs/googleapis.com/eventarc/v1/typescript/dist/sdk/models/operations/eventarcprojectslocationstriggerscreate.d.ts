import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EventarcProjectsLocationsTriggersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class EventarcProjectsLocationsTriggersCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    triggerId?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class EventarcProjectsLocationsTriggersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EventarcProjectsLocationsTriggersCreateRequest extends SpeakeasyBase {
    pathParams: EventarcProjectsLocationsTriggersCreatePathParams;
    queryParams: EventarcProjectsLocationsTriggersCreateQueryParams;
    request?: shared.TriggerInput;
    security: EventarcProjectsLocationsTriggersCreateSecurity;
}
export declare class EventarcProjectsLocationsTriggersCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}

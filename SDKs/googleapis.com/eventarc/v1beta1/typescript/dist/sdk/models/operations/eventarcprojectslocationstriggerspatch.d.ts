import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class EventarcProjectsLocationsTriggersPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class EventarcProjectsLocationsTriggersPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowMissing?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class EventarcProjectsLocationsTriggersPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EventarcProjectsLocationsTriggersPatchRequest extends SpeakeasyBase {
    pathParams: EventarcProjectsLocationsTriggersPatchPathParams;
    queryParams: EventarcProjectsLocationsTriggersPatchQueryParams;
    request?: shared.Trigger;
    security: EventarcProjectsLocationsTriggersPatchSecurity;
}
export declare class EventarcProjectsLocationsTriggersPatchResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

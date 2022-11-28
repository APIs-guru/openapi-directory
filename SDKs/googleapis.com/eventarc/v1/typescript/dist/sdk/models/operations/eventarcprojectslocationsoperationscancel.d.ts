import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EventarcProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class EventarcProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class EventarcProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EventarcProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: EventarcProjectsLocationsOperationsCancelPathParams;
    queryParams: EventarcProjectsLocationsOperationsCancelQueryParams;
    request?: Map<string, any>;
    security: EventarcProjectsLocationsOperationsCancelSecurity;
}
export declare class EventarcProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}

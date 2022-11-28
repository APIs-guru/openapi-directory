import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClouderrorreportingProjectsDeleteEventsPathParams extends SpeakeasyBase {
    projectName: string;
}
export declare class ClouderrorreportingProjectsDeleteEventsQueryParams extends SpeakeasyBase {
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
export declare class ClouderrorreportingProjectsDeleteEventsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ClouderrorreportingProjectsDeleteEventsRequest extends SpeakeasyBase {
    pathParams: ClouderrorreportingProjectsDeleteEventsPathParams;
    queryParams: ClouderrorreportingProjectsDeleteEventsQueryParams;
    security: ClouderrorreportingProjectsDeleteEventsSecurity;
}
export declare class ClouderrorreportingProjectsDeleteEventsResponse extends SpeakeasyBase {
    contentType: string;
    deleteEventsResponse?: Map<string, any>;
    statusCode: number;
}

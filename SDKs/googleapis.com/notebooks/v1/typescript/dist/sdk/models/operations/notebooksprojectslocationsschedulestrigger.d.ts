import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsSchedulesTriggerPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsSchedulesTriggerQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsSchedulesTriggerSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsSchedulesTriggerRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsSchedulesTriggerPathParams;
    queryParams: NotebooksProjectsLocationsSchedulesTriggerQueryParams;
    request?: Map<string, any>;
    security: NotebooksProjectsLocationsSchedulesTriggerSecurity;
}
export declare class NotebooksProjectsLocationsSchedulesTriggerResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

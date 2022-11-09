import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsSchedulesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class NotebooksProjectsLocationsSchedulesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    scheduleId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NotebooksProjectsLocationsSchedulesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsSchedulesCreateRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsSchedulesCreatePathParams;
    queryParams: NotebooksProjectsLocationsSchedulesCreateQueryParams;
    request?: shared.Schedule;
    security: NotebooksProjectsLocationsSchedulesCreateSecurity;
}
export declare class NotebooksProjectsLocationsSchedulesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsSchedulesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsSchedulesGetQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsSchedulesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsSchedulesGetRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsSchedulesGetPathParams;
    queryParams: NotebooksProjectsLocationsSchedulesGetQueryParams;
    security: NotebooksProjectsLocationsSchedulesGetSecurity;
}
export declare class NotebooksProjectsLocationsSchedulesGetResponse extends SpeakeasyBase {
    contentType: string;
    schedule?: shared.Schedule;
    statusCode: number;
}

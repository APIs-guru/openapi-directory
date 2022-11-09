import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsSchedulesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsSchedulesDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class NotebooksProjectsLocationsSchedulesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsSchedulesDeleteRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsSchedulesDeletePathParams;
    queryParams: NotebooksProjectsLocationsSchedulesDeleteQueryParams;
    security: NotebooksProjectsLocationsSchedulesDeleteSecurity;
}
export declare class NotebooksProjectsLocationsSchedulesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

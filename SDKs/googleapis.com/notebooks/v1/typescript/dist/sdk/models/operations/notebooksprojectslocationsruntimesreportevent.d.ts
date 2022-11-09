import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NotebooksProjectsLocationsRuntimesReportEventPathParams extends SpeakeasyBase {
    name: string;
}
export declare class NotebooksProjectsLocationsRuntimesReportEventQueryParams extends SpeakeasyBase {
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
export declare class NotebooksProjectsLocationsRuntimesReportEventSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class NotebooksProjectsLocationsRuntimesReportEventRequest extends SpeakeasyBase {
    pathParams: NotebooksProjectsLocationsRuntimesReportEventPathParams;
    queryParams: NotebooksProjectsLocationsRuntimesReportEventQueryParams;
    request?: shared.ReportRuntimeEventRequest;
    security: NotebooksProjectsLocationsRuntimesReportEventSecurity;
}
export declare class NotebooksProjectsLocationsRuntimesReportEventResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWorkspaceIdReportsPathParams extends SpeakeasyBase {
    workspaceId: string;
}
export declare class GetWorkspaceIdReportsQueryParams extends SpeakeasyBase {
    activityType?: string;
    endDate?: string;
    group?: string;
    startDate?: string;
    type?: string;
}
export declare class GetWorkspaceIdReportsSecurity extends SpeakeasyBase {
    bearer: shared.SchemeBearer;
}
export declare class GetWorkspaceIdReportsRequest extends SpeakeasyBase {
    pathParams: GetWorkspaceIdReportsPathParams;
    queryParams: GetWorkspaceIdReportsQueryParams;
    security: GetWorkspaceIdReportsSecurity;
}
export declare class GetWorkspaceIdReportsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectsQueryParams extends SpeakeasyBase {
    limit?: number;
    start?: string;
}
export declare class GetProjectsSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetProjectsRequest extends SpeakeasyBase {
    queryParams: GetProjectsQueryParams;
    security: GetProjectsSecurity;
}
export declare class GetProjectsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    projectList?: shared.ProjectList;
}

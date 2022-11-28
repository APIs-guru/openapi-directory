import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class GetProjectSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class GetProjectRequest extends SpeakeasyBase {
    pathParams: GetProjectPathParams;
    security: GetProjectSecurity;
}
export declare class GetProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    projectDetails?: shared.ProjectDetails;
}

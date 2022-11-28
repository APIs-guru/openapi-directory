import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProjectPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class DeleteProjectSecurity extends SpeakeasyBase {
    accessToken: shared.SchemeAccessToken;
}
export declare class DeleteProjectRequest extends SpeakeasyBase {
    pathParams: DeleteProjectPathParams;
    security: DeleteProjectSecurity;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    projectDetails?: shared.ProjectDetails;
}

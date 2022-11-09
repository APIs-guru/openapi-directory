import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ProjectsReadPathParams extends SpeakeasyBase {
    projectNumber: string;
}
export declare class ProjectsReadRequest extends SpeakeasyBase {
    pathParams: ProjectsReadPathParams;
}
export declare class ProjectsReadResponse extends SpeakeasyBase {
    contentType: string;
    project?: shared.Project;
    statusCode: number;
}

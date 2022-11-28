import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProjectPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class UpdateProjectHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class UpdateProjectRequestsInput extends SpeakeasyBase {
    applicationXml: Uint8Array;
    project?: shared.ProjectInput;
    project1?: shared.ProjectInput;
    project2?: shared.ProjectInput;
    textXml: Uint8Array;
}
export declare class UpdateProjectRequest extends SpeakeasyBase {
    pathParams: UpdateProjectPathParams;
    headers: UpdateProjectHeaders;
    request: UpdateProjectRequestsInput;
}
export declare class UpdateProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    project?: shared.Project;
    statusCode: number;
}

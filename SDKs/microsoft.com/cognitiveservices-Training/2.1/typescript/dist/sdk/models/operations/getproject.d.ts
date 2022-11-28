import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProjectPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class GetProjectHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetProjectRequest extends SpeakeasyBase {
    pathParams: GetProjectPathParams;
    headers: GetProjectHeaders;
}
export declare class GetProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    project?: shared.Project;
    statusCode: number;
}

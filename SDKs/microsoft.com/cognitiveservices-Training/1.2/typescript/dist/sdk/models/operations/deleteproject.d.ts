import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteProjectPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DeleteProjectHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class DeleteProjectRequest extends SpeakeasyBase {
    pathParams: DeleteProjectPathParams;
    headers: DeleteProjectHeaders;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

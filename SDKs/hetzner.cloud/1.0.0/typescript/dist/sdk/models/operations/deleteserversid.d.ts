import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteServersIdPathParams extends SpeakeasyBase {
    id: number;
}
/**
 * Error message for the Action if error occurred, otherwise null
**/
export declare class DeleteServersId200ApplicationJsonActionError extends SpeakeasyBase {
    code: string;
    message: string;
}
export declare class DeleteServersId200ApplicationJsonActionResources extends SpeakeasyBase {
    id: number;
    type: string;
}
export declare enum DeleteServersId200ApplicationJsonActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class DeleteServersId200ApplicationJsonAction extends SpeakeasyBase {
    command: string;
    error: DeleteServersId200ApplicationJsonActionError;
    finished: string;
    id: number;
    progress: number;
    resources: DeleteServersId200ApplicationJsonActionResources[];
    started: string;
    status: DeleteServersId200ApplicationJsonActionStatusEnum;
}
export declare class DeleteServersId200ApplicationJson extends SpeakeasyBase {
    action?: DeleteServersId200ApplicationJsonAction;
}
export declare class DeleteServersIdRequest extends SpeakeasyBase {
    pathParams: DeleteServersIdPathParams;
}
export declare class DeleteServersIdResponse extends SpeakeasyBase {
    contentType: string;
    deleteServersId200ApplicationJsonObject?: DeleteServersId200ApplicationJson;
    statusCode: number;
}

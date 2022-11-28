import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteIterationPathParams extends SpeakeasyBase {
    iterationId: string;
    projectId: string;
}
export declare class DeleteIterationHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class DeleteIterationRequest extends SpeakeasyBase {
    pathParams: DeleteIterationPathParams;
    headers: DeleteIterationHeaders;
}
export declare class DeleteIterationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

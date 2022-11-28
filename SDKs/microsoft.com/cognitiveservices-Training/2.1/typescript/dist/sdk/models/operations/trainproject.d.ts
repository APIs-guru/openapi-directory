import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TrainProjectPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class TrainProjectHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class TrainProjectRequest extends SpeakeasyBase {
    pathParams: TrainProjectPathParams;
    headers: TrainProjectHeaders;
}
export declare class TrainProjectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    iteration?: shared.Iteration;
    statusCode: number;
}

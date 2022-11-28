import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIterationsPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class GetIterationsHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetIterationsRequest extends SpeakeasyBase {
    pathParams: GetIterationsPathParams;
    headers: GetIterationsHeaders;
}
export declare class GetIterationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    iterations?: shared.Iteration[];
    statusCode: number;
}

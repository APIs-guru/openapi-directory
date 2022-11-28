import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReadDependenciesV1EnCoreWebSmDependenciesPostRequest extends SpeakeasyBase {
    request: shared.UserRequestIn;
}
export declare class ReadDependenciesV1EnCoreWebSmDependenciesPostResponse extends SpeakeasyBase {
    contentType: string;
    dependenciesOut?: shared.DependenciesOut;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}

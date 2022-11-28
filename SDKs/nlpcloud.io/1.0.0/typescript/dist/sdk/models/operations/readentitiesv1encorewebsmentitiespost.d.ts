import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReadEntitiesV1EnCoreWebSmEntitiesPostRequest extends SpeakeasyBase {
    request: shared.UserRequestIn;
}
export declare class ReadEntitiesV1EnCoreWebSmEntitiesPostResponse extends SpeakeasyBase {
    contentType: string;
    entitiesOut?: shared.EntitiesOut;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}

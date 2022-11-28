import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SolveVrpRequest extends SpeakeasyBase {
    request: shared.Request;
}
export declare class SolveVrpResponse extends SpeakeasyBase {
    badRequest?: shared.BadRequest;
    contentType: string;
    headers: Map<string, string[]>;
    internalErrorMessage?: shared.InternalErrorMessage;
    response?: shared.Response;
    statusCode: number;
}

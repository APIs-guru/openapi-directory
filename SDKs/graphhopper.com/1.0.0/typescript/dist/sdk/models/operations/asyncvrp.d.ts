import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AsyncVrpRequest extends SpeakeasyBase {
    request: shared.Request;
}
export declare class AsyncVrpResponse extends SpeakeasyBase {
    badRequest?: shared.BadRequest;
    contentType: string;
    headers: Map<string, string[]>;
    internalErrorMessage?: shared.InternalErrorMessage;
    jobId?: shared.JobId;
    statusCode: number;
}

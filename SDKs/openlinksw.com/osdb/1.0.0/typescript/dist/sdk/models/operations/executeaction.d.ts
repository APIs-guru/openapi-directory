import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExecuteActionPathParams extends SpeakeasyBase {
    actionId: string;
    serviceId: string;
}
export declare class ExecuteActionRequest extends SpeakeasyBase {
    pathParams: ExecuteActionPathParams;
    request?: shared.ExecBody;
}
export declare class ExecuteActionResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    statusCode: number;
}

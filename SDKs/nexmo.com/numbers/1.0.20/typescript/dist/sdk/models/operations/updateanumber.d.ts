import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateANumberRequest extends SpeakeasyBase {
    request: shared.NumberDetailsUpdate;
}
export declare class UpdateANumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    response?: shared.Response;
    unauthorized?: shared.Unauthorized;
}

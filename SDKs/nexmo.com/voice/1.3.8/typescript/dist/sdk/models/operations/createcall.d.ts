import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCallSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class CreateCallRequest extends SpeakeasyBase {
    request?: any;
    security: CreateCallSecurity;
}
export declare class CreateCallResponse extends SpeakeasyBase {
    contentType: string;
    createCallResponse?: shared.CreateCallResponse;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetCallPathParams extends SpeakeasyBase {
    uuid: string;
}
export declare class GetCallSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetCallRequest extends SpeakeasyBase {
    pathParams: GetCallPathParams;
    security: GetCallSecurity;
}
export declare class GetCallResponse extends SpeakeasyBase {
    contentType: string;
    getCallResponse?: shared.GetCallResponse;
    statusCode: number;
}

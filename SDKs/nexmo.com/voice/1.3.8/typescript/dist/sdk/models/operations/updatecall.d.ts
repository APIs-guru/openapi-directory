import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateCallPathParams extends SpeakeasyBase {
    uuid: string;
}
export declare class UpdateCallSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class UpdateCallRequest extends SpeakeasyBase {
    pathParams: UpdateCallPathParams;
    request: any;
    security: UpdateCallSecurity;
}
export declare class UpdateCallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

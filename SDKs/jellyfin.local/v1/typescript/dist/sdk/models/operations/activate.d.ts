import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivateSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class ActivateRequest extends SpeakeasyBase {
    security: ActivateSecurity;
}
export declare class ActivateResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}

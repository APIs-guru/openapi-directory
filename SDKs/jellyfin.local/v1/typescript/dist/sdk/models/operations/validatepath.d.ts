import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ValidatePathRequests extends SpeakeasyBase {
    validatePathDto?: shared.ValidatePathDto;
    validatePathDto1?: shared.ValidatePathDto;
    validatePathDto2?: shared.ValidatePathDto;
}
export declare class ValidatePathSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class ValidatePathRequest extends SpeakeasyBase {
    request: ValidatePathRequests;
    security: ValidatePathSecurity;
}
export declare class ValidatePathResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}

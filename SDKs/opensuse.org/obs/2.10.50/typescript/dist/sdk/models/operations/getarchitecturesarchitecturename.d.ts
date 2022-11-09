import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetArchitecturesArchitectureNamePathParams extends SpeakeasyBase {
    architectureName: string;
}
export declare class GetArchitecturesArchitectureNameSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetArchitecturesArchitectureNameRequest extends SpeakeasyBase {
    pathParams: GetArchitecturesArchitectureNamePathParams;
    security: GetArchitecturesArchitectureNameSecurity;
}
export declare class GetArchitecturesArchitectureNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}

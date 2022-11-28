import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchServicePathParams extends SpeakeasyBase {
    serviceId: string;
}
export declare class PatchServiceSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PatchServiceRequest extends SpeakeasyBase {
    pathParams: PatchServicePathParams;
    request?: shared.Patch[];
    security: PatchServiceSecurity;
}
export declare class PatchServiceResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}

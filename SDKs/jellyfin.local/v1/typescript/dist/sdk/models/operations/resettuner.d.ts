import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetTunerPathParams extends SpeakeasyBase {
    tunerId: string;
}
export declare class ResetTunerSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class ResetTunerRequest extends SpeakeasyBase {
    pathParams: ResetTunerPathParams;
    security: ResetTunerSecurity;
}
export declare class ResetTunerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

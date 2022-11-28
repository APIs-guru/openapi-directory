import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddTunerHostRequests extends SpeakeasyBase {
    tunerHostInfo?: shared.TunerHostInfo;
    tunerHostInfo1?: shared.TunerHostInfo;
    tunerHostInfo2?: shared.TunerHostInfo;
}
export declare class AddTunerHostSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class AddTunerHostRequest extends SpeakeasyBase {
    request?: AddTunerHostRequests;
    security: AddTunerHostSecurity;
}
export declare class AddTunerHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tunerHostInfo?: shared.TunerHostInfo;
}

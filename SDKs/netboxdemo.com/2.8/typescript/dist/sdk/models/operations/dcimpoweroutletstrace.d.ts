import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerOutletsTracePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerOutletsTraceRequest extends SpeakeasyBase {
    pathParams: DcimPowerOutletsTracePathParams;
}
export declare class DcimPowerOutletsTraceResponse extends SpeakeasyBase {
    contentType: string;
    powerOutlet?: shared.PowerOutlet;
    statusCode: number;
}

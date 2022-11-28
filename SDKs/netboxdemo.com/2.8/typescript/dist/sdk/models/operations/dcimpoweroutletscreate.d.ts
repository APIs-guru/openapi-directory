import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerOutletsCreateRequest extends SpeakeasyBase {
    request: shared.WritablePowerOutletInput;
}
export declare class DcimPowerOutletsCreateResponse extends SpeakeasyBase {
    contentType: string;
    powerOutlet?: shared.PowerOutlet;
    statusCode: number;
}

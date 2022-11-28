import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerOutletsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerOutletsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPowerOutletsUpdatePathParams;
    request: shared.WritablePowerOutletInput;
}
export declare class DcimPowerOutletsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerOutlet?: shared.PowerOutlet;
    statusCode: number;
}

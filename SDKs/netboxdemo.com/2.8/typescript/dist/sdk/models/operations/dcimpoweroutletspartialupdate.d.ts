import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerOutletsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerOutletsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPowerOutletsPartialUpdatePathParams;
    request: shared.WritablePowerOutletInput;
}
export declare class DcimPowerOutletsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerOutlet?: shared.PowerOutlet;
    statusCode: number;
}

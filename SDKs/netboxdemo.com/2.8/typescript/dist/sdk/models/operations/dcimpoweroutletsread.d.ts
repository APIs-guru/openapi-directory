import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerOutletsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerOutletsReadRequest extends SpeakeasyBase {
    pathParams: DcimPowerOutletsReadPathParams;
}
export declare class DcimPowerOutletsReadResponse extends SpeakeasyBase {
    contentType: string;
    powerOutlet?: shared.PowerOutlet;
    statusCode: number;
}

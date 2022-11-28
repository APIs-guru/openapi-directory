import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPanelsCreateRequest extends SpeakeasyBase {
    request: shared.WritablePowerPanelInput;
}
export declare class DcimPowerPanelsCreateResponse extends SpeakeasyBase {
    contentType: string;
    powerPanel?: shared.PowerPanel;
    statusCode: number;
}

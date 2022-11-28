import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPanelsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerPanelsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPowerPanelsUpdatePathParams;
    request: shared.WritablePowerPanelInput;
}
export declare class DcimPowerPanelsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerPanel?: shared.PowerPanel;
    statusCode: number;
}

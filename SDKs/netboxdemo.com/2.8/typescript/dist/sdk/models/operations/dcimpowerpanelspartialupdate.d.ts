import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPanelsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerPanelsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPowerPanelsPartialUpdatePathParams;
    request: shared.WritablePowerPanelInput;
}
export declare class DcimPowerPanelsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerPanel?: shared.PowerPanel;
    statusCode: number;
}

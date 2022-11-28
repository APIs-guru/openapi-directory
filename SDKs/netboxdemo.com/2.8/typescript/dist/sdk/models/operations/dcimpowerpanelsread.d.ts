import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPanelsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerPanelsReadRequest extends SpeakeasyBase {
    pathParams: DcimPowerPanelsReadPathParams;
}
export declare class DcimPowerPanelsReadResponse extends SpeakeasyBase {
    contentType: string;
    powerPanel?: shared.PowerPanel;
    statusCode: number;
}

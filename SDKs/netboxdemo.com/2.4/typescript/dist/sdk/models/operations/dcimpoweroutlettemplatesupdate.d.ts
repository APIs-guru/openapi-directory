import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerOutletTemplatesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerOutletTemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPowerOutletTemplatesUpdatePathParams;
    request: shared.WritablePowerOutletTemplateInput;
}
export declare class DcimPowerOutletTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerOutletTemplate?: shared.PowerOutletTemplate;
    statusCode: number;
}

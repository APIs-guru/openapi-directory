import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerOutletTemplatesCreateRequest extends SpeakeasyBase {
    request: shared.WritablePowerOutletTemplateInput;
}
export declare class DcimPowerOutletTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    powerOutletTemplate?: shared.PowerOutletTemplate;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerOutletTemplatesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerOutletTemplatesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPowerOutletTemplatesPartialUpdatePathParams;
    request: shared.WritablePowerOutletTemplateInput;
}
export declare class DcimPowerOutletTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerOutletTemplate?: shared.PowerOutletTemplate;
    statusCode: number;
}

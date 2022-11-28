import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPortTemplatesCreateRequest extends SpeakeasyBase {
    request: shared.WritablePowerPortTemplateInput;
}
export declare class DcimPowerPortTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    powerPortTemplate?: shared.PowerPortTemplate;
    statusCode: number;
}

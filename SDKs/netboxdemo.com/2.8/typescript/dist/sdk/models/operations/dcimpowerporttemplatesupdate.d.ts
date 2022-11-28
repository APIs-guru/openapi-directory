import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPortTemplatesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerPortTemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPowerPortTemplatesUpdatePathParams;
    request: shared.WritablePowerPortTemplateInput;
}
export declare class DcimPowerPortTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerPortTemplate?: shared.PowerPortTemplate;
    statusCode: number;
}

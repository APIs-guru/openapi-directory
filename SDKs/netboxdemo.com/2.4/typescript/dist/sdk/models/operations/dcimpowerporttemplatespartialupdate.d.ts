import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPortTemplatesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerPortTemplatesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPowerPortTemplatesPartialUpdatePathParams;
    request: shared.WritablePowerPortTemplateInput;
}
export declare class DcimPowerPortTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerPortTemplate?: shared.PowerPortTemplate;
    statusCode: number;
}

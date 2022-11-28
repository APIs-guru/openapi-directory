import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRearPortTemplatesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRearPortTemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRearPortTemplatesUpdatePathParams;
    request: shared.WritableRearPortTemplateInput;
}
export declare class DcimRearPortTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rearPortTemplate?: shared.RearPortTemplate;
    statusCode: number;
}

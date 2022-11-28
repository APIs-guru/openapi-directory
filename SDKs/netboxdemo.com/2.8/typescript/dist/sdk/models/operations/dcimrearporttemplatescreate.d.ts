import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRearPortTemplatesCreateRequest extends SpeakeasyBase {
    request: shared.WritableRearPortTemplateInput;
}
export declare class DcimRearPortTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    rearPortTemplate?: shared.RearPortTemplate;
    statusCode: number;
}

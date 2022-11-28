import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRearPortTemplatesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRearPortTemplatesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRearPortTemplatesPartialUpdatePathParams;
    request: shared.WritableRearPortTemplateInput;
}
export declare class DcimRearPortTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rearPortTemplate?: shared.RearPortTemplate;
    statusCode: number;
}

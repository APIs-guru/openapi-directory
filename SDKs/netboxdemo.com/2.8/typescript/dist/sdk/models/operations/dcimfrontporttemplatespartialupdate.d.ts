import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimFrontPortTemplatesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimFrontPortTemplatesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimFrontPortTemplatesPartialUpdatePathParams;
    request: shared.WritableFrontPortTemplateInput;
}
export declare class DcimFrontPortTemplatesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    frontPortTemplate?: shared.FrontPortTemplate;
    statusCode: number;
}

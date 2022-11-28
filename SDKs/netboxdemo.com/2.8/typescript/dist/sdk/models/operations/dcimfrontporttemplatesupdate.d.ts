import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimFrontPortTemplatesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimFrontPortTemplatesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimFrontPortTemplatesUpdatePathParams;
    request: shared.WritableFrontPortTemplateInput;
}
export declare class DcimFrontPortTemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    frontPortTemplate?: shared.FrontPortTemplate;
    statusCode: number;
}

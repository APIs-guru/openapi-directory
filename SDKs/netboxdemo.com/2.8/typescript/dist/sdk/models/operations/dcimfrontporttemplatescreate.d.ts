import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimFrontPortTemplatesCreateRequest extends SpeakeasyBase {
    request: shared.WritableFrontPortTemplateInput;
}
export declare class DcimFrontPortTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    frontPortTemplate?: shared.FrontPortTemplate;
    statusCode: number;
}

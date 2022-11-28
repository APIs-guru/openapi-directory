import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimFrontPortTemplatesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimFrontPortTemplatesReadRequest extends SpeakeasyBase {
    pathParams: DcimFrontPortTemplatesReadPathParams;
}
export declare class DcimFrontPortTemplatesReadResponse extends SpeakeasyBase {
    contentType: string;
    frontPortTemplate?: shared.FrontPortTemplate;
    statusCode: number;
}

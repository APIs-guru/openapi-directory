import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimFrontPortsCreateRequest extends SpeakeasyBase {
    request: shared.WritableFrontPortInput;
}
export declare class DcimFrontPortsCreateResponse extends SpeakeasyBase {
    contentType: string;
    frontPort?: shared.FrontPort;
    statusCode: number;
}

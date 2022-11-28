import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimFrontPortsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimFrontPortsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimFrontPortsPartialUpdatePathParams;
    request: shared.WritableFrontPortInput;
}
export declare class DcimFrontPortsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    frontPort?: shared.FrontPort;
    statusCode: number;
}

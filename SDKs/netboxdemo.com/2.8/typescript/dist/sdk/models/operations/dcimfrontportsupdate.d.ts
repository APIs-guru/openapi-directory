import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimFrontPortsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimFrontPortsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimFrontPortsUpdatePathParams;
    request: shared.WritableFrontPortInput;
}
export declare class DcimFrontPortsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    frontPort?: shared.FrontPort;
    statusCode: number;
}

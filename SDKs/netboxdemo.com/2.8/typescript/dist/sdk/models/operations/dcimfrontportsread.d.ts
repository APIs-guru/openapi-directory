import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimFrontPortsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimFrontPortsReadRequest extends SpeakeasyBase {
    pathParams: DcimFrontPortsReadPathParams;
}
export declare class DcimFrontPortsReadResponse extends SpeakeasyBase {
    contentType: string;
    frontPort?: shared.FrontPort;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimFrontPortsTracePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimFrontPortsTraceRequest extends SpeakeasyBase {
    pathParams: DcimFrontPortsTracePathParams;
}
export declare class DcimFrontPortsTraceResponse extends SpeakeasyBase {
    contentType: string;
    frontPort?: shared.FrontPort;
    statusCode: number;
}

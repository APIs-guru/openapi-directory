import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WellsReadPathParams extends SpeakeasyBase {
    wellTagNumber: number;
}
export declare class WellsReadRequest extends SpeakeasyBase {
    pathParams: WellsReadPathParams;
}
export declare class WellsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wellDetail?: shared.WellDetail;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimCablesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimCablesReadRequest extends SpeakeasyBase {
    pathParams: DcimCablesReadPathParams;
}
export declare class DcimCablesReadResponse extends SpeakeasyBase {
    cable?: shared.Cable;
    contentType: string;
    statusCode: number;
}

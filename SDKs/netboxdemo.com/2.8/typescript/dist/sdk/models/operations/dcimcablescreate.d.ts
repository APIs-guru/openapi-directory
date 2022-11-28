import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimCablesCreateRequest extends SpeakeasyBase {
    request: shared.WritableCableInput;
}
export declare class DcimCablesCreateResponse extends SpeakeasyBase {
    cable?: shared.Cable;
    contentType: string;
    statusCode: number;
}

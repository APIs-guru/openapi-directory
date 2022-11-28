import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimCablesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimCablesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimCablesUpdatePathParams;
    request: shared.WritableCableInput;
}
export declare class DcimCablesUpdateResponse extends SpeakeasyBase {
    cable?: shared.Cable;
    contentType: string;
    statusCode: number;
}

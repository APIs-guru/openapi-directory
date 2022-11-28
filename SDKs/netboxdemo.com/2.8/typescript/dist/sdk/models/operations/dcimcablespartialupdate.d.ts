import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimCablesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimCablesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimCablesPartialUpdatePathParams;
    request: shared.WritableCableInput;
}
export declare class DcimCablesPartialUpdateResponse extends SpeakeasyBase {
    cable?: shared.Cable;
    contentType: string;
    statusCode: number;
}

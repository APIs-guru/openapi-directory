import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfacesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInterfacesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimInterfacesPartialUpdatePathParams;
    request: shared.WritableInterfaceInput;
}
export declare class DcimInterfacesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    interface?: shared.Interface;
    statusCode: number;
}

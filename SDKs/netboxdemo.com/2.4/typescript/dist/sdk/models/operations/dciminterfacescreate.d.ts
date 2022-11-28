import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfacesCreateRequest extends SpeakeasyBase {
    request: shared.WritableInterfaceInput;
}
export declare class DcimInterfacesCreateResponse extends SpeakeasyBase {
    contentType: string;
    interface?: shared.Interface;
    statusCode: number;
}

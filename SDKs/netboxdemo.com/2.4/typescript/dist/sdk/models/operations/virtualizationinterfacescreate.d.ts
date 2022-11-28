import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VirtualizationInterfacesCreateRequest extends SpeakeasyBase {
    request: shared.WritableInterfaceInput;
}
export declare class VirtualizationInterfacesCreateResponse extends SpeakeasyBase {
    contentType: string;
    interface?: shared.Interface;
    statusCode: number;
}

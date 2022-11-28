import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfaceConnectionsCreateRequest extends SpeakeasyBase {
    request: shared.WritableInterfaceConnectionInput;
}
export declare class DcimInterfaceConnectionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    interfaceConnection?: shared.InterfaceConnection;
    statusCode: number;
}

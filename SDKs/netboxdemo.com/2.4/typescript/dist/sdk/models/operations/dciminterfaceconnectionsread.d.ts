import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfaceConnectionsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInterfaceConnectionsReadRequest extends SpeakeasyBase {
    pathParams: DcimInterfaceConnectionsReadPathParams;
}
export declare class DcimInterfaceConnectionsReadResponse extends SpeakeasyBase {
    contentType: string;
    interfaceConnection?: shared.InterfaceConnection;
    statusCode: number;
}

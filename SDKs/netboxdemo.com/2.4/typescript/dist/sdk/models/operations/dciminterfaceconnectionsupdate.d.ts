import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfaceConnectionsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInterfaceConnectionsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimInterfaceConnectionsUpdatePathParams;
    request: shared.WritableInterfaceConnectionInput;
}
export declare class DcimInterfaceConnectionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    interfaceConnection?: shared.InterfaceConnection;
    statusCode: number;
}

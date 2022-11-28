import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfaceConnectionsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInterfaceConnectionsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimInterfaceConnectionsPartialUpdatePathParams;
    request: shared.WritableInterfaceConnectionInput;
}
export declare class DcimInterfaceConnectionsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    interfaceConnection?: shared.InterfaceConnection;
    statusCode: number;
}

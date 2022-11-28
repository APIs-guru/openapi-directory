import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfacesGraphsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInterfacesGraphsRequest extends SpeakeasyBase {
    pathParams: DcimInterfacesGraphsPathParams;
}
export declare class DcimInterfacesGraphsResponse extends SpeakeasyBase {
    contentType: string;
    deviceInterface?: shared.DeviceInterface;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamServicesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamServicesReadRequest extends SpeakeasyBase {
    pathParams: IpamServicesReadPathParams;
}
export declare class IpamServicesReadResponse extends SpeakeasyBase {
    contentType: string;
    service?: shared.Service;
    statusCode: number;
}

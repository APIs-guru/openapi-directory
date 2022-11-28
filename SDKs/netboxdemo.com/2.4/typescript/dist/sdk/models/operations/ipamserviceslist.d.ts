import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamServicesListQueryParams extends SpeakeasyBase {
    device?: string;
    deviceId?: string;
    limit?: number;
    name?: string;
    offset?: number;
    port?: number;
    protocol?: string;
    q?: string;
    tag?: string;
    virtualMachine?: string;
    virtualMachineId?: string;
}
export declare class IpamServicesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Service[];
}
export declare class IpamServicesListRequest extends SpeakeasyBase {
    queryParams: IpamServicesListQueryParams;
}
export declare class IpamServicesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamServicesList200ApplicationJsonObject?: IpamServicesList200ApplicationJson;
}

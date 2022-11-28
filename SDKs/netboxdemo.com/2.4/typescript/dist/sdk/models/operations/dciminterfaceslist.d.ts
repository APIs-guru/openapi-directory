import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInterfacesListQueryParams extends SpeakeasyBase {
    device?: string;
    deviceId?: number;
    enabled?: string;
    formFactor?: string;
    lagId?: string;
    limit?: number;
    macAddress?: string;
    mgmtOnly?: string;
    mtu?: number;
    name?: string;
    offset?: number;
    tag?: string;
    type?: string;
    vlan?: string;
    vlanId?: string;
}
export declare class DcimInterfacesList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Interface[];
}
export declare class DcimInterfacesListRequest extends SpeakeasyBase {
    queryParams: DcimInterfacesListQueryParams;
}
export declare class DcimInterfacesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimInterfacesList200ApplicationJsonObject?: DcimInterfacesList200ApplicationJson;
}

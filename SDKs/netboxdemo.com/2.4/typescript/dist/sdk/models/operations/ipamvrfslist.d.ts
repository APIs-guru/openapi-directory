import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVrfsListQueryParams extends SpeakeasyBase {
    enforceUnique?: string;
    idIn?: string;
    limit?: number;
    name?: string;
    offset?: number;
    q?: string;
    rd?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
}
export declare class IpamVrfsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Vrf[];
}
export declare class IpamVrfsListRequest extends SpeakeasyBase {
    queryParams: IpamVrfsListQueryParams;
}
export declare class IpamVrfsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamVrfsList200ApplicationJsonObject?: IpamVrfsList200ApplicationJson;
}

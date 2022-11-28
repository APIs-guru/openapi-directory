import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamRirsListQueryParams extends SpeakeasyBase {
    idIn?: string;
    isPrivate?: string;
    limit?: number;
    name?: string;
    offset?: number;
    slug?: string;
}
export declare class IpamRirsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Rir[];
}
export declare class IpamRirsListRequest extends SpeakeasyBase {
    queryParams: IpamRirsListQueryParams;
}
export declare class IpamRirsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ipamRirsList200ApplicationJsonObject?: IpamRirsList200ApplicationJson;
}

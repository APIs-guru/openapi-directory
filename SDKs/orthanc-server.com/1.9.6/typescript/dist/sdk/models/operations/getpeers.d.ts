import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPeersQueryParams extends SpeakeasyBase {
    expand?: string;
}
export declare class GetPeersRequest extends SpeakeasyBase {
    queryParams: GetPeersQueryParams;
}
export declare class GetPeersResponse extends SpeakeasyBase {
    contentType: string;
    getPeers200ApplicationJsonAny?: any;
    statusCode: number;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class RpcRequest extends SpeakeasyBase {
    id: string;
    jsonrpc: string;
    method: string;
    params: string[];
}

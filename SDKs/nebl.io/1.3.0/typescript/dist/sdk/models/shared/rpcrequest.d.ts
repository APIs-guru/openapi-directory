import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RpcRequest extends SpeakeasyBase {
    id: string;
    jsonrpc: string;
    method: string;
    params: string[];
}

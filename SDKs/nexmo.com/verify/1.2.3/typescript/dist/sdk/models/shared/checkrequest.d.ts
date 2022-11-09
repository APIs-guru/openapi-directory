import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class CheckRequest extends SpeakeasyBase {
    apiKey: string;
    apiSecret: string;
    code: string;
    ipAddress?: string;
    requestId: string;
}

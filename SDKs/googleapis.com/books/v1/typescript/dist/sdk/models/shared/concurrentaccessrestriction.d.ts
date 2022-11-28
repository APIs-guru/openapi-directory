import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConcurrentAccessRestriction extends SpeakeasyBase {
    deviceAllowed?: boolean;
    kind?: string;
    maxConcurrentDevices?: number;
    message?: string;
    nonce?: string;
    reasonCode?: string;
    restricted?: boolean;
    signature?: string;
    source?: string;
    timeWindowSeconds?: number;
    volumeId?: string;
}

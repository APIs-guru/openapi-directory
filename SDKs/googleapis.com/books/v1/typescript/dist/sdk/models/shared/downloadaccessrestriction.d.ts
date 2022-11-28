import { SpeakeasyBase } from "../../../internal/utils";
export declare class DownloadAccessRestriction extends SpeakeasyBase {
    deviceAllowed?: boolean;
    downloadsAcquired?: number;
    justAcquired?: boolean;
    kind?: string;
    maxDownloadDevices?: number;
    message?: string;
    nonce?: string;
    reasonCode?: string;
    restricted?: boolean;
    signature?: string;
    source?: string;
    volumeId?: string;
}

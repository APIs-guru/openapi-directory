import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of the single storage device.
**/
export declare class GoogleChromeManagementV1DiskInfo extends SpeakeasyBase {
    bytesReadThisSession?: string;
    bytesWrittenThisSession?: string;
    discardTimeThisSession?: string;
    health?: string;
    ioTimeThisSession?: string;
    manufacturer?: string;
    model?: string;
    readTimeThisSession?: string;
    serialNumber?: string;
    sizeBytes?: string;
    type?: string;
    volumeIds?: string[];
    writeTimeThisSession?: string;
}

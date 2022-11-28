import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes information necessary for ingesting an RTMP, HTTP, or SRT stream.
**/
export declare class IngestionInfo extends SpeakeasyBase {
    backupIngestionAddress?: string;
    ingestionAddress?: string;
    rtmpsBackupIngestionAddress?: string;
    rtmpsIngestionAddress?: string;
    streamName?: string;
}

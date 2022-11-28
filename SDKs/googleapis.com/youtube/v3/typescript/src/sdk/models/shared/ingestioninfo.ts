import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IngestionInfo
/** 
 * Describes information necessary for ingesting an RTMP, HTTP, or SRT stream.
**/
export class IngestionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backupIngestionAddress" })
  backupIngestionAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=ingestionAddress" })
  ingestionAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=rtmpsBackupIngestionAddress" })
  rtmpsBackupIngestionAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=rtmpsIngestionAddress" })
  rtmpsIngestionAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=streamName" })
  streamName?: string;
}

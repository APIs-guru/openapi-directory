import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IngestionInfo
/** 
 * Describes information necessary for ingesting an RTMP, HTTP, or SRT stream.
**/
export class IngestionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=backupIngestionAddress" })
  backupIngestionAddress?: string;

  @Metadata({ data: "json, name=ingestionAddress" })
  ingestionAddress?: string;

  @Metadata({ data: "json, name=rtmpsBackupIngestionAddress" })
  rtmpsBackupIngestionAddress?: string;

  @Metadata({ data: "json, name=rtmpsIngestionAddress" })
  rtmpsIngestionAddress?: string;

  @Metadata({ data: "json, name=streamName" })
  streamName?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TelemetryConfigLogFormatEnum {
    LogFormatUnspecified = "LOG_FORMAT_UNSPECIFIED",
    Legacy = "LEGACY",
    Json = "JSON"
}


// TelemetryConfig
/** 
 * Telemetry Configuration for the Dataproc Metastore service.
**/
export class TelemetryConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logFormat" })
  logFormat?: TelemetryConfigLogFormatEnum;
}

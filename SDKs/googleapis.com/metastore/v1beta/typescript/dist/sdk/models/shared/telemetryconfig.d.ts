import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TelemetryConfigLogFormatEnum {
    LogFormatUnspecified = "LOG_FORMAT_UNSPECIFIED",
    Legacy = "LEGACY",
    Json = "JSON"
}
/**
 * Telemetry Configuration for the Dataproc Metastore service.
**/
export declare class TelemetryConfig extends SpeakeasyBase {
    logFormat?: TelemetryConfigLogFormatEnum;
}

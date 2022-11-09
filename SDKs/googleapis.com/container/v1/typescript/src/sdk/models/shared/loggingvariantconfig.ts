import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum LoggingVariantConfigVariantEnum {
    VariantUnspecified = "VARIANT_UNSPECIFIED"
,    Default = "DEFAULT"
,    MaxThroughput = "MAX_THROUGHPUT"
}


// LoggingVariantConfig
/** 
 * LoggingVariantConfig specifies the behaviour of the logging component.
**/
export class LoggingVariantConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=variant" })
  variant?: LoggingVariantConfigVariantEnum;
}

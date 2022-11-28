import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LoggingVariantConfigVariantEnum {
    VariantUnspecified = "VARIANT_UNSPECIFIED",
    Default = "DEFAULT",
    MaxThroughput = "MAX_THROUGHPUT"
}


// LoggingVariantConfig
/** 
 * LoggingVariantConfig specifies the behaviour of the logging component.
**/
export class LoggingVariantConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=variant" })
  variant?: LoggingVariantConfigVariantEnum;
}

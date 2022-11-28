import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LoggingVariantConfigVariantEnum {
    VariantUnspecified = "VARIANT_UNSPECIFIED",
    Default = "DEFAULT",
    MaxThroughput = "MAX_THROUGHPUT"
}
/**
 * LoggingVariantConfig specifies the behaviour of the logging component.
**/
export declare class LoggingVariantConfig extends SpeakeasyBase {
    variant?: LoggingVariantConfigVariantEnum;
}

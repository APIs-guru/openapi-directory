import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LoggingVariantConfig } from "./loggingvariantconfig";


// NodePoolLoggingConfig
/** 
 * NodePoolLoggingConfig specifies logging configuration for nodepools.
**/
export class NodePoolLoggingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=variantConfig" })
  variantConfig?: LoggingVariantConfig;
}

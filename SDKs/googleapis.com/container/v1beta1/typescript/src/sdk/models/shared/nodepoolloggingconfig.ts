import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LoggingVariantConfig } from "./loggingvariantconfig";



// NodePoolLoggingConfig
/** 
 * NodePoolLoggingConfig specifies logging configuration for nodepools.
**/
export class NodePoolLoggingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=variantConfig" })
  variantConfig?: LoggingVariantConfig;
}

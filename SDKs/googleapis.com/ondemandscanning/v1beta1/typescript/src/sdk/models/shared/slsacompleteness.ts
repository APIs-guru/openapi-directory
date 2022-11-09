import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SlsaCompleteness
/** 
 * Indicates that the builder claims certain fields in this message to be complete.
**/
export class SlsaCompleteness extends SpeakeasyBase {
  @Metadata({ data: "json, name=arguments" })
  arguments?: boolean;

  @Metadata({ data: "json, name=environment" })
  environment?: boolean;

  @Metadata({ data: "json, name=materials" })
  materials?: boolean;
}

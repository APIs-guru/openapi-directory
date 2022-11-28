import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Completeness
/** 
 * Indicates that the builder claims certain fields in this message to be complete.
**/
export class Completeness extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arguments" })
  arguments?: boolean;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=materials" })
  materials?: boolean;
}

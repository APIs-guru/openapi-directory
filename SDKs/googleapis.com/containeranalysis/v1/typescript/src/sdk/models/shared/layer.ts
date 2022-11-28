import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Layer
/** 
 * Layer holds metadata specific to a layer of a Docker image.
**/
export class Layer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arguments" })
  arguments?: string;

  @SpeakeasyMetadata({ data: "json, name=directive" })
  directive?: string;
}

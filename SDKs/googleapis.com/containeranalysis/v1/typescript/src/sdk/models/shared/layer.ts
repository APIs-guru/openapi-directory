import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Layer
/** 
 * Layer holds metadata specific to a layer of a Docker image.
**/
export class Layer extends SpeakeasyBase {
  @Metadata({ data: "json, name=arguments" })
  arguments?: string;

  @Metadata({ data: "json, name=directive" })
  directive?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Sink
/** 
 * A sink that records can be encoded and written to.
**/
export class Sink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codec" })
  codec?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: Map<string, any>;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Sink
/** 
 * A sink that records can be encoded and written to.
**/
export class Sink extends SpeakeasyBase {
  @Metadata({ data: "json, name=codec" })
  codec?: Map<string, any>;

  @Metadata({ data: "json, name=spec" })
  spec?: Map<string, any>;
}

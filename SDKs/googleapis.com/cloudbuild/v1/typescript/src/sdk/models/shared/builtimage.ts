import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TimeSpan } from "./timespan";


// BuiltImage
/** 
 * An image built by the pipeline.
**/
export class BuiltImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=digest" })
  digest?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pushTiming" })
  pushTiming?: TimeSpan;
}

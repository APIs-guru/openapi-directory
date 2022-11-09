import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceMetadata } from "./sourcemetadata";


// Source
/** 
 * A source that records can be read and decoded from.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseSpecs" })
  baseSpecs?: Map<string, any>[];

  @Metadata({ data: "json, name=codec" })
  codec?: Map<string, any>;

  @Metadata({ data: "json, name=doesNotNeedSplitting" })
  doesNotNeedSplitting?: boolean;

  @Metadata({ data: "json, name=metadata" })
  metadata?: SourceMetadata;

  @Metadata({ data: "json, name=spec" })
  spec?: Map<string, any>;
}

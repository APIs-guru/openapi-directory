import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceMetadata } from "./sourcemetadata";



// Source
/** 
 * A source that records can be read and decoded from.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseSpecs" })
  baseSpecs?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=codec" })
  codec?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=doesNotNeedSplitting" })
  doesNotNeedSplitting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: SourceMetadata;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: Map<string, any>;
}

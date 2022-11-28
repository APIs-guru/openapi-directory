import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Options } from "./options";



// CollectionOverride
/** 
 * CollectionOverride allows resource handling overrides for specific resources within a BaseType
**/
export class CollectionOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection" })
  collection?: string;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: Options;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MethodMap } from "./methodmap";
import { Options } from "./options";


// CollectionOverride
/** 
 * CollectionOverride allows resource handling overrides for specific resources within a BaseType
**/
export class CollectionOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=collection" })
  collection?: string;

  @Metadata({ data: "json, name=methodMap" })
  methodMap?: MethodMap;

  @Metadata({ data: "json, name=options" })
  options?: Options;
}

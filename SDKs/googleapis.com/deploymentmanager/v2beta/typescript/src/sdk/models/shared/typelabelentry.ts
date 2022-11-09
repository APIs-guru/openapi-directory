import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TypeLabelEntry
/** 
 * Label object for Types
**/
export class TypeLabelEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TypeLabelEntry
/** 
 * Label object for Types
**/
export class TypeLabelEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

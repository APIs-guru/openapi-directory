import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CompositeTypeLabelEntry
/** 
 * Label object for CompositeTypes
**/
export class CompositeTypeLabelEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

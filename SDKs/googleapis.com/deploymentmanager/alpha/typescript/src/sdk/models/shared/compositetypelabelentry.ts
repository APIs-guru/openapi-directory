import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CompositeTypeLabelEntry
/** 
 * Label object for CompositeTypes
**/
export class CompositeTypeLabelEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}

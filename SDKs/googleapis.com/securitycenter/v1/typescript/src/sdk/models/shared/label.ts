import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Label
/** 
 * Label represents a generic name=value label. Label has separate name and value fields to support filtering with contains().
**/
export class Label extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}

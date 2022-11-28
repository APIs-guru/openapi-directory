import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Label
/** 
 * Label represents a generic name=value label. Label has separate name and value fields to support filtering with contains().
**/
export class Label extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

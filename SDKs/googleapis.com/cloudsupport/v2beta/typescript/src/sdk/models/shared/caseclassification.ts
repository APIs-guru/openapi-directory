import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CaseClassification
/** 
 * A classification object with a product type and value.
**/
export class CaseClassification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

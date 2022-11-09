import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CaseClassification
/** 
 * A classification object with a product type and value.
**/
export class CaseClassification extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DocumentationRule
/** 
 * A documentation rule provides information about individual API elements.
**/
export class DocumentationRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deprecationDescription" })
  deprecationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector?: string;
}

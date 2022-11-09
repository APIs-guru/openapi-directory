import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DocumentationRule
/** 
 * A documentation rule provides information about individual API elements.
**/
export class DocumentationRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=deprecationDescription" })
  deprecationDescription?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=selector" })
  selector?: string;
}

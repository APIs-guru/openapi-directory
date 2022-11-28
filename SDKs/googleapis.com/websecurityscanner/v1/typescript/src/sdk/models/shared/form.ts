import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Form
/** 
 * ! Information about a vulnerability with an HTML.
**/
export class Form extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionUri" })
  actionUri?: string;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string[];
}

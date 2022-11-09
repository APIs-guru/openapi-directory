import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Form
/** 
 * ! Information about a vulnerability with an HTML.
**/
export class Form extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionUri" })
  actionUri?: string;

  @Metadata({ data: "json, name=fields" })
  fields?: string[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Groups
/** 
 * JSON response template for groups migration API.
**/
export class Groups extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=responseCode" })
  responseCode?: string;
}

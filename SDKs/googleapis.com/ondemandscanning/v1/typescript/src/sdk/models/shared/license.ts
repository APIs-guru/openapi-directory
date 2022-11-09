import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// License
/** 
 * License information.
**/
export class License extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=expression" })
  expression?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// License
/** 
 * License information.
**/
export class License extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression?: string;
}

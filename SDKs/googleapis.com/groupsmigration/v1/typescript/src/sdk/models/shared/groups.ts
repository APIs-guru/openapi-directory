import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Groups
/** 
 * JSON response template for groups migration API.
**/
export class Groups extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=responseCode" })
  responseCode?: string;
}

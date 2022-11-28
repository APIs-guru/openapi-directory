import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Secret
/** 
 * A securely stored value.
**/
export class Secret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudSecret" })
  cloudSecret?: string;
}

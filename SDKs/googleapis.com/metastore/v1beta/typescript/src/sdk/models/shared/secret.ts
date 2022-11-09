import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Secret
/** 
 * A securely stored value.
**/
export class Secret extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudSecret" })
  cloudSecret?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EmailInput
/** 
 * Input for EMAIL verification.
**/
export class EmailInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=emailAddress" })
  emailAddress?: string;
}

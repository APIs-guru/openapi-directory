import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EmailInput
/** 
 * Input for EMAIL verification.
**/
export class EmailInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailAddress" })
  emailAddress?: string;
}

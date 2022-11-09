import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddressInput
/** 
 * Input for ADDRESS verification.
**/
export class AddressInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=mailerContactName" })
  mailerContactName?: string;
}

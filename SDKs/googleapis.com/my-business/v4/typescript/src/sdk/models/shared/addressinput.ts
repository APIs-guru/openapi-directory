import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddressInput
/** 
 * Input for ADDRESS verification.
**/
export class AddressInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mailerContactName" })
  mailerContactName?: string;
}

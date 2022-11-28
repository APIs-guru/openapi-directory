import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNamePhoneNumberIn } from "./firstlastnamephonenumberin";



export class BatchFirstLastNamePhoneNumberIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNamesWithPhoneNumbers", elemType: FirstLastNamePhoneNumberIn })
  personalNamesWithPhoneNumbers?: FirstLastNamePhoneNumberIn[];
}

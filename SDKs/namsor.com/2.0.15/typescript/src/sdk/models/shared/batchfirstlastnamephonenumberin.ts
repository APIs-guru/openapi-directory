import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstLastNamePhoneNumberIn } from "./firstlastnamephonenumberin";


export class BatchFirstLastNamePhoneNumberIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNamesWithPhoneNumbers", elemType: shared.FirstLastNamePhoneNumberIn })
  personalNamesWithPhoneNumbers?: FirstLastNamePhoneNumberIn[];
}

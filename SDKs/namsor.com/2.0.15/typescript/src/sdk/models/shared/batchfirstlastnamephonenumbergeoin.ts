import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstLastNamePhoneNumberGeoIn } from "./firstlastnamephonenumbergeoin";


export class BatchFirstLastNamePhoneNumberGeoIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNamesWithPhoneNumbers", elemType: shared.FirstLastNamePhoneNumberGeoIn })
  personalNamesWithPhoneNumbers?: FirstLastNamePhoneNumberGeoIn[];
}

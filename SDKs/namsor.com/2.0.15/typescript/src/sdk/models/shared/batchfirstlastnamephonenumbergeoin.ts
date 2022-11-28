import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNamePhoneNumberGeoIn } from "./firstlastnamephonenumbergeoin";



export class BatchFirstLastNamePhoneNumberGeoIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNamesWithPhoneNumbers", elemType: FirstLastNamePhoneNumberGeoIn })
  personalNamesWithPhoneNumbers?: FirstLastNamePhoneNumberGeoIn[];
}

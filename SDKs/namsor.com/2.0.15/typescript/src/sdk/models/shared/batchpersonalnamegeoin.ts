import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonalNameGeoIn } from "./personalnamegeoin";



export class BatchPersonalNameGeoIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: PersonalNameGeoIn })
  personalNames?: PersonalNameGeoIn[];
}

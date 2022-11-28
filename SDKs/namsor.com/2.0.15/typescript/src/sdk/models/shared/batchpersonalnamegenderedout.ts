import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonalNameGenderedOut } from "./personalnamegenderedout";



export class BatchPersonalNameGenderedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: PersonalNameGenderedOut })
  personalNames?: PersonalNameGenderedOut[];
}

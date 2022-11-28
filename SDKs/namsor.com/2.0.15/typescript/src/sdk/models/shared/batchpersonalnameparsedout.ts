import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonalNameParsedOut } from "./personalnameparsedout";



export class BatchPersonalNameParsedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: PersonalNameParsedOut })
  personalNames?: PersonalNameParsedOut[];
}

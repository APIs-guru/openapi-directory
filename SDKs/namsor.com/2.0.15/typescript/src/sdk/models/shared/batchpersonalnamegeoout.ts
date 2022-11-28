import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonalNameGeoOut } from "./personalnamegeoout";



export class BatchPersonalNameGeoOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: PersonalNameGeoOut })
  personalNames?: PersonalNameGeoOut[];
}

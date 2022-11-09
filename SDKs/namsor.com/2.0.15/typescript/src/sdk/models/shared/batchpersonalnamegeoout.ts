import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PersonalNameGeoOut } from "./personalnamegeoout";


export class BatchPersonalNameGeoOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.PersonalNameGeoOut })
  personalNames?: PersonalNameGeoOut[];
}

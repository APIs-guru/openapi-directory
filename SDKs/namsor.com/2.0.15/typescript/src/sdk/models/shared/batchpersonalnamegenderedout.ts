import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PersonalNameGenderedOut } from "./personalnamegenderedout";


export class BatchPersonalNameGenderedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.PersonalNameGenderedOut })
  personalNames?: PersonalNameGenderedOut[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PersonalNameParsedOut } from "./personalnameparsedout";


export class BatchPersonalNameParsedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.PersonalNameParsedOut })
  personalNames?: PersonalNameParsedOut[];
}

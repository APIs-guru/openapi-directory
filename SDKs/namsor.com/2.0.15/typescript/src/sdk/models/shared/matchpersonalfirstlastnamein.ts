import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameIn } from "./firstlastnamein";
import { PersonalNameIn } from "./personalnamein";



export class MatchPersonalFirstLastNameIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name1" })
  name1?: FirstLastNameIn;

  @SpeakeasyMetadata({ data: "json, name=name2" })
  name2?: PersonalNameIn;
}

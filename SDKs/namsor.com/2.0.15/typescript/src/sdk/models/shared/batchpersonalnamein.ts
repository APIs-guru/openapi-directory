import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PersonalNameIn } from "./personalnamein";



export class BatchPersonalNameIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: PersonalNameIn })
  personalNames?: PersonalNameIn[];
}

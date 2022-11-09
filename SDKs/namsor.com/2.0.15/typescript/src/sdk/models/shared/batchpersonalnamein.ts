import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PersonalNameIn } from "./personalnamein";


export class BatchPersonalNameIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.PersonalNameIn })
  personalNames?: PersonalNameIn[];
}

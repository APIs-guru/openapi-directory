import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PersonalNameGeoIn } from "./personalnamegeoin";


export class BatchPersonalNameGeoIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.PersonalNameGeoIn })
  personalNames?: PersonalNameGeoIn[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstLastNameGeoIn } from "./firstlastnamegeoin";


export class BatchFirstLastNameGeoIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.FirstLastNameGeoIn })
  personalNames?: FirstLastNameGeoIn[];
}

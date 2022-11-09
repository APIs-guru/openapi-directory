import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstLastNameGeoZippedIn } from "./firstlastnamegeozippedin";


export class BatchFirstLastNameGeoZippedIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.FirstLastNameGeoZippedIn })
  personalNames?: FirstLastNameGeoZippedIn[];
}

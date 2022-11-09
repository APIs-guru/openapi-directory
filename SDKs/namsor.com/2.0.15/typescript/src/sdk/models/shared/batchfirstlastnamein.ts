import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstLastNameIn } from "./firstlastnamein";


export class BatchFirstLastNameIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.FirstLastNameIn })
  personalNames?: FirstLastNameIn[];
}

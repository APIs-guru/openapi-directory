import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameIn } from "./firstlastnamein";



export class BatchFirstLastNameIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: FirstLastNameIn })
  personalNames?: FirstLastNameIn[];
}

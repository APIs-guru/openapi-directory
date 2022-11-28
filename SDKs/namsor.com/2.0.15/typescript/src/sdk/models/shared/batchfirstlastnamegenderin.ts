import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameGenderIn } from "./firstlastnamegenderin";



export class BatchFirstLastNameGenderIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: FirstLastNameGenderIn })
  personalNames?: FirstLastNameGenderIn[];
}

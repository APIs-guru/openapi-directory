import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirstLastNameGenderIn } from "./firstlastnamegenderin";


export class BatchFirstLastNameGenderIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.FirstLastNameGenderIn })
  personalNames?: FirstLastNameGenderIn[];
}

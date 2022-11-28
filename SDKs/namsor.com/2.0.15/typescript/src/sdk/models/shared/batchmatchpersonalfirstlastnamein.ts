import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MatchPersonalFirstLastNameIn } from "./matchpersonalfirstlastnamein";



export class BatchMatchPersonalFirstLastNameIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=personalNames", elemType: MatchPersonalFirstLastNameIn })
  personalNames?: MatchPersonalFirstLastNameIn[];
}

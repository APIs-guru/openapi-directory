import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MatchPersonalFirstLastNameIn } from "./matchpersonalfirstlastnamein";


export class BatchMatchPersonalFirstLastNameIn extends SpeakeasyBase {
  @Metadata({ data: "json, name=personalNames", elemType: shared.MatchPersonalFirstLastNameIn })
  personalNames?: MatchPersonalFirstLastNameIn[];
}

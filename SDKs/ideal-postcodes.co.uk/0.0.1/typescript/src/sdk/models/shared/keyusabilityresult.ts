import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyUsabilityResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=available" })
  available?: boolean;
}

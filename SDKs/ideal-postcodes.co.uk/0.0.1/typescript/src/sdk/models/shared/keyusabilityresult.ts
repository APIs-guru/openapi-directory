import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeyUsabilityResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: boolean;
}

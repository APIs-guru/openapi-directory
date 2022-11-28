import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trust } from "./trust";



export class DetachTrustRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trust" })
  trust?: Trust;
}

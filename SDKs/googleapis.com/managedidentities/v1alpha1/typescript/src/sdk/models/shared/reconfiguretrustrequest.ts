import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Trust } from "./trust";



export class ReconfigureTrustRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=trust" })
  trust?: Trust;
}

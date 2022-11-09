import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Trust } from "./trust";


export class ValidateTrustRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=trust" })
  trust?: Trust;
}

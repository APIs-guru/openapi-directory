import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Trust } from "./trust";


export class AttachTrustRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=trust" })
  trust?: Trust;
}

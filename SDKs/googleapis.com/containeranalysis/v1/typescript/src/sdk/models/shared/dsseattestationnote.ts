import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DsseHint } from "./dssehint";



export class DsseAttestationNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hint" })
  hint?: DsseHint;
}

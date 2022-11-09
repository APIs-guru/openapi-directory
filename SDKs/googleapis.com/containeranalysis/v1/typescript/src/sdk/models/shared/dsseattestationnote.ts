import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DsseHint } from "./dssehint";


export class DsseAttestationNote extends SpeakeasyBase {
  @Metadata({ data: "json, name=hint" })
  hint?: DsseHint;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnvelopeSignature extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyid" })
  keyid?: string;

  @Metadata({ data: "json, name=sig" })
  sig?: string;
}

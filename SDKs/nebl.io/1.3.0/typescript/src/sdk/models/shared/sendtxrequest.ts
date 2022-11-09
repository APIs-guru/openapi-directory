import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendTxRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=rawtx" })
  rawtx: string;
}

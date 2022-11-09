import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRawTxResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=rawtx" })
  rawtx?: string;
}

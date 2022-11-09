import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFaucetResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=txId" })
  txId?: string;
}


export class GetFaucetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: GetFaucetResponseData;

  @Metadata({ data: "json, name=status" })
  status?: string;
}

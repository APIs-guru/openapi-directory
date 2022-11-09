import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IssueTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=tokenId" })
  tokenId?: string;

  @Metadata({ data: "json, name=txHex" })
  txHex?: string;
}

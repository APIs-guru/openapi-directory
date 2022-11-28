import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IssueTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tokenId" })
  tokenId?: string;

  @SpeakeasyMetadata({ data: "json, name=txHex" })
  txHex?: string;
}

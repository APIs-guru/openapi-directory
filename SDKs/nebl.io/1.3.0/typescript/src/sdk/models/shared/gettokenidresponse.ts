import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTokenIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tokenId" })
  tokenId?: string;

  @SpeakeasyMetadata({ data: "json, name=tokenName" })
  tokenName?: string;
}

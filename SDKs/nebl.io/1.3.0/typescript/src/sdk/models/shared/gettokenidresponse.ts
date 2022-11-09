import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTokenIdResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=tokenId" })
  tokenId?: string;

  @Metadata({ data: "json, name=tokenName" })
  tokenName?: string;
}

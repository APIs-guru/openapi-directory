import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountAdwordsLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=adwordsId" })
  adwordsId?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}

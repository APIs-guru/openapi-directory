import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountAdwordsLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adwordsId" })
  adwordsId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}

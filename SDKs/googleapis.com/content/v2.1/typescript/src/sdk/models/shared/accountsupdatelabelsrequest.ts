import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountsUpdateLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelIds" })
  labelIds?: string[];
}

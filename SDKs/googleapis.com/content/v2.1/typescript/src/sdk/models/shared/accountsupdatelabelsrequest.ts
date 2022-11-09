import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountsUpdateLabelsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelIds" })
  labelIds?: string[];
}

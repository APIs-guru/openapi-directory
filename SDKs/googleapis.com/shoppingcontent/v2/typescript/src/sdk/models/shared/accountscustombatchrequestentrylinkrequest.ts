import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountsCustomBatchRequestEntryLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=linkType" })
  linkType?: string;

  @SpeakeasyMetadata({ data: "json, name=linkedAccountId" })
  linkedAccountId?: string;
}

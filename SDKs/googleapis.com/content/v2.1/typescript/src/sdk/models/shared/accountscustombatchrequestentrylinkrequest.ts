import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountsCustomBatchRequestEntryLinkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=linkType" })
  linkType?: string;

  @Metadata({ data: "json, name=linkedAccountId" })
  linkedAccountId?: string;

  @Metadata({ data: "json, name=services" })
  services?: string[];
}

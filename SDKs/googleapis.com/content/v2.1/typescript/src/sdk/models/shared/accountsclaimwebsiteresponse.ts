import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountsClaimWebsiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}

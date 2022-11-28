import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountsLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}

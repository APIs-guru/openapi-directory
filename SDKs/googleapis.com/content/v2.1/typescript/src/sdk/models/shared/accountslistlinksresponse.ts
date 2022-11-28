import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkedAccount } from "./linkedaccount";



export class AccountsListLinksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=links", elemType: LinkedAccount })
  links?: LinkedAccount[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

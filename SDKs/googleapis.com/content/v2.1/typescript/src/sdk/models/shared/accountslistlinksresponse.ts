import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LinkedAccount } from "./linkedaccount";


export class AccountsListLinksResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=links", elemType: shared.LinkedAccount })
  links?: LinkedAccount[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

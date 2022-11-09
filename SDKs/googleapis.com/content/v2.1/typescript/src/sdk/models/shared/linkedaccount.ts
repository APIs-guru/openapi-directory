import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LinkService } from "./linkservice";


export class LinkedAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=linkedAccountId" })
  linkedAccountId?: string;

  @Metadata({ data: "json, name=services", elemType: shared.LinkService })
  services?: LinkService[];
}

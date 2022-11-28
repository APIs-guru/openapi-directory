import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LinkService } from "./linkservice";



export class LinkedAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linkedAccountId" })
  linkedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: LinkService })
  services?: LinkService[];
}

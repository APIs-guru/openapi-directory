import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecretMgmtLinks } from "./secretmgmtlinks";



export class SecretInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: SecretMgmtLinks;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}

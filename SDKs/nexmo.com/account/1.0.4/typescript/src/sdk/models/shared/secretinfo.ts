import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SecretMgmtLinks } from "./secretmgmtlinks";


export class SecretInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: SecretMgmtLinks;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}

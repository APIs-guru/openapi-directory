import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompanyDomainUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;
}

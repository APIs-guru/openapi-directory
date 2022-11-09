import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompanyDomainInputModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;
}

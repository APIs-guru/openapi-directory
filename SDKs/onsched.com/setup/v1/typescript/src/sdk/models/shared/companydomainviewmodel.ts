import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompanyDomainViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;
}

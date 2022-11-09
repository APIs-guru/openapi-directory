import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CompanyDomainViewModel } from "./companydomainviewmodel";


export class CompanyDomainListViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.CompanyDomainViewModel })
  data?: CompanyDomainViewModel[];

  @Metadata({ data: "json, name=objectName" })
  objectName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

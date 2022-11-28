import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompanyDomainViewModel } from "./companydomainviewmodel";



export class CompanyDomainListViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: CompanyDomainViewModel })
  data?: CompanyDomainViewModel[];

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

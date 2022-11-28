import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanyDomainUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;
}

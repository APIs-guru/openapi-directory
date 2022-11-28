import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanyDomainInputModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;
}

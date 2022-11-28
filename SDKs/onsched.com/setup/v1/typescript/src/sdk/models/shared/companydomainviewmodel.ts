import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanyDomainViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=objectName" })
  objectName?: string;
}

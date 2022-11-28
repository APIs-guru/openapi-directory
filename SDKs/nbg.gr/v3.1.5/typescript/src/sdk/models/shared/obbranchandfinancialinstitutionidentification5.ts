import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ObBranchAndFinancialInstitutionIdentification5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Identification" })
  identification: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeName" })
  schemeName: string;
}

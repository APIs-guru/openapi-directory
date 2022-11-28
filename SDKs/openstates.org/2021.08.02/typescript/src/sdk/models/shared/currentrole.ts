import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrgClassificationEnum } from "./orgclassificationenum";



export class CurrentRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=district" })
  district?: any;

  @SpeakeasyMetadata({ data: "json, name=division_id" })
  divisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=org_classification" })
  orgClassification: OrgClassificationEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}

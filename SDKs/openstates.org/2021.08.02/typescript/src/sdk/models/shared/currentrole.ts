import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrgClassificationEnum } from "./orgclassificationenum";


export class CurrentRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=district" })
  district?: any;

  @Metadata({ data: "json, name=division_id" })
  divisionId?: string;

  @Metadata({ data: "json, name=org_classification" })
  orgClassification: OrgClassificationEnum;

  @Metadata({ data: "json, name=title" })
  title: string;
}

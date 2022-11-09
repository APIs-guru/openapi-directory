import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JurisdictionClassificationEnum } from "./jurisdictionclassificationenum";


export class CompactJurisdiction extends SpeakeasyBase {
  @Metadata({ data: "json, name=classification" })
  classification: JurisdictionClassificationEnum;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}

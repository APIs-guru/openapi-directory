import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JurisdictionClassificationEnum } from "./jurisdictionclassificationenum";



export class CompactJurisdiction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification" })
  classification: JurisdictionClassificationEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}

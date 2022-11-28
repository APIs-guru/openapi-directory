import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BillTypeCategoryEnum } from "./billtypecategoryenum";



export class BillType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: BillTypeCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

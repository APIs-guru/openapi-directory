import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BillTypeCategoryEnum } from "./billtypecategoryenum";


export class BillType extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: BillTypeCategoryEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

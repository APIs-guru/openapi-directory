import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomerCategoryEditFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}

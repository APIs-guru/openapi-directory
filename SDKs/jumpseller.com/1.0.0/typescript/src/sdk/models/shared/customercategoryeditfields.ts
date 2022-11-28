import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomerCategoryEditFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

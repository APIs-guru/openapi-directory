import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CategoryEditFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: number;
}

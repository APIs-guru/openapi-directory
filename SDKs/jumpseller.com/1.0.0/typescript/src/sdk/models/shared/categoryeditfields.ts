import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CategoryEditFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent_id" })
  parentId?: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CategoryFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent_id" })
  parentId?: number;

  @Metadata({ data: "json, name=permalink" })
  permalink?: string;
}

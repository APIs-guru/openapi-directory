import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CategoryFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_id" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=permalink" })
  permalink?: string;
}

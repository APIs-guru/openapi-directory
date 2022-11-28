import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CategoryItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=badgeUrl" })
  badgeUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class Category extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: CategoryItems })
  items?: CategoryItems[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}

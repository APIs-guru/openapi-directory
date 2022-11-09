import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CategoryItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=badgeUrl" })
  badgeUrl?: string;

  @Metadata({ data: "json, name=categoryId" })
  categoryId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class Category extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.CategoryItems })
  items?: CategoryItems[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageCategory } from "./pagecategory";



// PageModifyFieldsImage
/** 
 * Image of the Page
**/
export class PageModifyFieldsImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export enum PageModifyFieldsStatusEnum {
    Public = "public",
    Draft = "draft",
    Hidden = "hidden"
}


export class PageModifyFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=categories", elemType: PageCategory })
  categories?: PageCategory[];

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: PageModifyFieldsImage;

  @SpeakeasyMetadata({ data: "json, name=meta_description" })
  metaDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=page_title" })
  pageTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=permalink" })
  permalink?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PageModifyFieldsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: number;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageCategory } from "./pagecategory";
import { PageTemplate } from "./pagetemplate";



// PageFieldsImage
/** 
 * Image of the Page
**/
export class PageFieldsImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

export enum PageFieldsStatusEnum {
    Public = "public",
    Draft = "draft",
    Hidden = "hidden"
}


export class PageFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=categories", elemType: PageCategory })
  categories?: PageCategory[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: PageFieldsImage;

  @SpeakeasyMetadata({ data: "json, name=legal" })
  legal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=meta_description" })
  metaDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=page_title" })
  pageTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=permalink" })
  permalink?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PageFieldsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: PageTemplate;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

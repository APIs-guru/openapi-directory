import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PageCategory } from "./pagecategory";
import { PageTemplate } from "./pagetemplate";


// PageFieldsImage
/** 
 * Image of the Page
**/
export class PageFieldsImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

export enum PageFieldsStatusEnum {
    Public = "public"
,    Draft = "draft"
,    Hidden = "hidden"
}


export class PageFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=categories", elemType: shared.PageCategory })
  categories?: PageCategory[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=image" })
  image?: PageFieldsImage;

  @Metadata({ data: "json, name=legal" })
  legal?: boolean;

  @Metadata({ data: "json, name=meta_description" })
  metaDescription?: string;

  @Metadata({ data: "json, name=page_title" })
  pageTitle?: string;

  @Metadata({ data: "json, name=permalink" })
  permalink?: string;

  @Metadata({ data: "json, name=status" })
  status?: PageFieldsStatusEnum;

  @Metadata({ data: "json, name=template" })
  template?: PageTemplate;

  @Metadata({ data: "json, name=title" })
  title?: string;
}

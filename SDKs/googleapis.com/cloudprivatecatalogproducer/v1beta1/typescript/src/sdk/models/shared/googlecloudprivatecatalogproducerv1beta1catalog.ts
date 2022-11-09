import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudPrivatecatalogproducerV1beta1Catalog
/** 
 * The producer representation of a catalog which is a curated collection of
 * solutions that can be managed, controlled, and shared by cloud admins.
**/
export class GoogleCloudPrivatecatalogproducerV1beta1Catalog extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

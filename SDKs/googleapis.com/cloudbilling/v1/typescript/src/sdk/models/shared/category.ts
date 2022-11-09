import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Category
/** 
 * Represents the category hierarchy of a SKU.
**/
export class Category extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceFamily" })
  resourceFamily?: string;

  @Metadata({ data: "json, name=resourceGroup" })
  resourceGroup?: string;

  @Metadata({ data: "json, name=serviceDisplayName" })
  serviceDisplayName?: string;

  @Metadata({ data: "json, name=usageType" })
  usageType?: string;
}

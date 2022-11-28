import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Category
/** 
 * Represents the category hierarchy of a SKU.
**/
export class Category extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceFamily" })
  resourceFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceGroup" })
  resourceGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceDisplayName" })
  serviceDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=usageType" })
  usageType?: string;
}

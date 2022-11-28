import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
import { DestinationStatus } from "./destinationstatus";
import { Issue } from "./issue";



// Product
/** 
 * Product data.
**/
export class Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Attributes;

  @SpeakeasyMetadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationStatuses", elemType: DestinationStatus })
  destinationStatuses?: DestinationStatus[];

  @SpeakeasyMetadata({ data: "json, name=issues", elemType: Issue })
  issues?: Issue[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=targetCountry" })
  targetCountry?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Attributes } from "./attributes";
import { DestinationStatus } from "./destinationstatus";
import { Issue } from "./issue";


// Product
/** 
 * Product data.
**/
export class Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Attributes;

  @Metadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @Metadata({ data: "json, name=destinationStatuses", elemType: shared.DestinationStatus })
  destinationStatuses?: DestinationStatus[];

  @Metadata({ data: "json, name=issues", elemType: shared.Issue })
  issues?: Issue[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=targetCountry" })
  targetCountry?: string;
}

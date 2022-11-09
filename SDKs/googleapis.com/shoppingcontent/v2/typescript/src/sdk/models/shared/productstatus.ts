import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductStatusDataQualityIssue } from "./productstatusdataqualityissue";
import { ProductStatusDestinationStatus } from "./productstatusdestinationstatus";
import { ProductStatusItemLevelIssue } from "./productstatusitemlevelissue";
import { Product } from "./product";


// ProductStatus
/** 
 * The status of a product, i.e., information about a product computed asynchronously.
**/
export class ProductStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=dataQualityIssues", elemType: shared.ProductStatusDataQualityIssue })
  dataQualityIssues?: ProductStatusDataQualityIssue[];

  @Metadata({ data: "json, name=destinationStatuses", elemType: shared.ProductStatusDestinationStatus })
  destinationStatuses?: ProductStatusDestinationStatus[];

  @Metadata({ data: "json, name=googleExpirationDate" })
  googleExpirationDate?: string;

  @Metadata({ data: "json, name=itemLevelIssues", elemType: shared.ProductStatusItemLevelIssue })
  itemLevelIssues?: ProductStatusItemLevelIssue[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=product" })
  product?: Product;

  @Metadata({ data: "json, name=productId" })
  productId?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}

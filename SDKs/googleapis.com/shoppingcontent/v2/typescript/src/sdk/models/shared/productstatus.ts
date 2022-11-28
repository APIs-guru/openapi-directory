import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductStatusDataQualityIssue } from "./productstatusdataqualityissue";
import { ProductStatusDestinationStatus } from "./productstatusdestinationstatus";
import { ProductStatusItemLevelIssue } from "./productstatusitemlevelissue";
import { Product } from "./product";



// ProductStatus
/** 
 * The status of a product, i.e., information about a product computed asynchronously.
**/
export class ProductStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=dataQualityIssues", elemType: ProductStatusDataQualityIssue })
  dataQualityIssues?: ProductStatusDataQualityIssue[];

  @SpeakeasyMetadata({ data: "json, name=destinationStatuses", elemType: ProductStatusDestinationStatus })
  destinationStatuses?: ProductStatusDestinationStatus[];

  @SpeakeasyMetadata({ data: "json, name=googleExpirationDate" })
  googleExpirationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=itemLevelIssues", elemType: ProductStatusItemLevelIssue })
  itemLevelIssues?: ProductStatusItemLevelIssue[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateDate" })
  lastUpdateDate?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: Product;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}

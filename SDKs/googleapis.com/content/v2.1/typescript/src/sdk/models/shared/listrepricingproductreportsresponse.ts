import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepricingProductReport } from "./repricingproductreport";



// ListRepricingProductReportsResponse
/** 
 * Response message for the ListRepricingProductReports method.
**/
export class ListRepricingProductReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=repricingProductReports", elemType: RepricingProductReport })
  repricingProductReports?: RepricingProductReport[];
}

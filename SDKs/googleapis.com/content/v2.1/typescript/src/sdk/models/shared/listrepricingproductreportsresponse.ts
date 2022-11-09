import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepricingProductReport } from "./repricingproductreport";


// ListRepricingProductReportsResponse
/** 
 * Response message for the ListRepricingProductReports method.
**/
export class ListRepricingProductReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=repricingProductReports", elemType: shared.RepricingProductReport })
  repricingProductReports?: RepricingProductReport[];
}

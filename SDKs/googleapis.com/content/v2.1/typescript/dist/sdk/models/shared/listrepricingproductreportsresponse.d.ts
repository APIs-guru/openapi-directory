import { SpeakeasyBase } from "../../../internal/utils";
import { RepricingProductReport } from "./repricingproductreport";
/**
 * Response message for the ListRepricingProductReports method.
**/
export declare class ListRepricingProductReportsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    repricingProductReports?: RepricingProductReport[];
}

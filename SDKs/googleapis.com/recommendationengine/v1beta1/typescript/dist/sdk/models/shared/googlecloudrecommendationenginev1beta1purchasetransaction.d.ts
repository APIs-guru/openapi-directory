import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A transaction represents the entire purchase transaction.
**/
export declare class GoogleCloudRecommendationengineV1beta1PurchaseTransaction extends SpeakeasyBase {
    costs?: Map<string, number>;
    currencyCode?: string;
    id?: string;
    revenue?: number;
    taxes?: Map<string, number>;
}

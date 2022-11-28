import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data
**/
export declare class AccountShippingImprovements extends SpeakeasyBase {
    allowShippingImprovements?: boolean;
}

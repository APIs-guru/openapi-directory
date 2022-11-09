import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirebaseFcmDataV1beta1AndroidDeliveryData } from "./googlefirebasefcmdatav1beta1androiddeliverydata";
/**
 * Response message for ListAndroidDeliveryData.
**/
export declare class GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse extends SpeakeasyBase {
    androidDeliveryData?: GoogleFirebaseFcmDataV1beta1AndroidDeliveryData[];
    nextPageToken?: string;
}

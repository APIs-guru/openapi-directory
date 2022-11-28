import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseFcmDataV1beta1AndroidDeliveryData } from "./googlefirebasefcmdatav1beta1androiddeliverydata";



// GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse
/** 
 * Response message for ListAndroidDeliveryData.
**/
export class GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidDeliveryData", elemType: GoogleFirebaseFcmDataV1beta1AndroidDeliveryData })
  androidDeliveryData?: GoogleFirebaseFcmDataV1beta1AndroidDeliveryData[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

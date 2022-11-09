import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirebaseFcmDataV1beta1AndroidDeliveryData } from "./googlefirebasefcmdatav1beta1androiddeliverydata";


// GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse
/** 
 * Response message for ListAndroidDeliveryData.
**/
export class GoogleFirebaseFcmDataV1beta1ListAndroidDeliveryDataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidDeliveryData", elemType: shared.GoogleFirebaseFcmDataV1beta1AndroidDeliveryData })
  androidDeliveryData?: GoogleFirebaseFcmDataV1beta1AndroidDeliveryData[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}

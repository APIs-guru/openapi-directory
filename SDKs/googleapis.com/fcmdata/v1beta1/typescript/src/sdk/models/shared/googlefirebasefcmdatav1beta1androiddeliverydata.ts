import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirebaseFcmDataV1beta1Data } from "./googlefirebasefcmdatav1beta1data";
import { GoogleTypeDate } from "./googletypedate";



// GoogleFirebaseFcmDataV1beta1AndroidDeliveryData
/** 
 * Message delivery data for a given date, app, and analytics label combination.
**/
export class GoogleFirebaseFcmDataV1beta1AndroidDeliveryData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=analyticsLabel" })
  analyticsLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GoogleFirebaseFcmDataV1beta1Data;

  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: GoogleTypeDate;
}

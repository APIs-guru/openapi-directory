import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirebaseFcmDataV1beta1Data } from "./googlefirebasefcmdatav1beta1data";
import { GoogleTypeDate } from "./googletypedate";


// GoogleFirebaseFcmDataV1beta1AndroidDeliveryData
/** 
 * Message delivery data for a given date, app, and analytics label combination.
**/
export class GoogleFirebaseFcmDataV1beta1AndroidDeliveryData extends SpeakeasyBase {
  @Metadata({ data: "json, name=analyticsLabel" })
  analyticsLabel?: string;

  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=data" })
  data?: GoogleFirebaseFcmDataV1beta1Data;

  @Metadata({ data: "json, name=date" })
  date?: GoogleTypeDate;
}

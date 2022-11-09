import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleFirebaseFcmDataV1beta1Data } from "./googlefirebasefcmdatav1beta1data";
import { GoogleTypeDate } from "./googletypedate";
/**
 * Message delivery data for a given date, app, and analytics label combination.
**/
export declare class GoogleFirebaseFcmDataV1beta1AndroidDeliveryData extends SpeakeasyBase {
    analyticsLabel?: string;
    appId?: string;
    data?: GoogleFirebaseFcmDataV1beta1Data;
    date?: GoogleTypeDate;
}

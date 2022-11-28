import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsentList } from "./consentlist";


export enum EvaluateUserConsentsRequestResponseViewEnum {
    ResponseViewUnspecified = "RESPONSE_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}


// EvaluateUserConsentsRequest
/** 
 * Evaluate a user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, causing slight delays between the time mappings are created or updated and when they are included in EvaluateUserConsents results.
**/
export class EvaluateUserConsentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentList" })
  consentList?: ConsentList;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestAttributes" })
  requestAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resourceAttributes" })
  resourceAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=responseView" })
  responseView?: EvaluateUserConsentsRequestResponseViewEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConsentList } from "./consentlist";

export enum EvaluateUserConsentsRequestResponseViewEnum {
    ResponseViewUnspecified = "RESPONSE_VIEW_UNSPECIFIED"
,    Basic = "BASIC"
,    Full = "FULL"
}


// EvaluateUserConsentsRequest
/** 
 * Evaluate a user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, causing slight delays between the time mappings are created or updated and when they are included in EvaluateUserConsents results.
**/
export class EvaluateUserConsentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentList" })
  consentList?: ConsentList;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=requestAttributes" })
  requestAttributes?: Map<string, string>;

  @Metadata({ data: "json, name=resourceAttributes" })
  resourceAttributes?: Map<string, string>;

  @Metadata({ data: "json, name=responseView" })
  responseView?: EvaluateUserConsentsRequestResponseViewEnum;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}

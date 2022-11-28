import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsentList } from "./consentlist";


export enum CheckDataAccessRequestResponseViewEnum {
    ResponseViewUnspecified = "RESPONSE_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}


// CheckDataAccessRequest
/** 
 * Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.
**/
export class CheckDataAccessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentList" })
  consentList?: ConsentList;

  @SpeakeasyMetadata({ data: "json, name=dataId" })
  dataId?: string;

  @SpeakeasyMetadata({ data: "json, name=requestAttributes" })
  requestAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=responseView" })
  responseView?: CheckDataAccessRequestResponseViewEnum;
}

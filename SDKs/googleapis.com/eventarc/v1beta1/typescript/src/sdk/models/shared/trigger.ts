import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { MatchingCriteria } from "./matchingcriteria";
import { Transport } from "./transport";
import { TransportInput } from "./transport";



// Trigger
/** 
 * A representation of the trigger resource.
**/
export class Trigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: Destination;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=matchingCriteria", elemType: MatchingCriteria })
  matchingCriteria?: MatchingCriteria[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=transport" })
  transport?: Transport;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// TriggerInput
/** 
 * A representation of the trigger resource.
**/
export class TriggerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: Destination;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=matchingCriteria", elemType: MatchingCriteria })
  matchingCriteria?: MatchingCriteria[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=transport" })
  transport?: TransportInput;
}

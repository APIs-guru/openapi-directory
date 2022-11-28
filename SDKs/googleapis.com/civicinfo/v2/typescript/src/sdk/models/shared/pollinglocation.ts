import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleAddressType } from "./simpleaddresstype";
import { Source } from "./source";



// PollingLocation
/** 
 * A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot.
**/
export class PollingLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: SimpleAddressType;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=pollingHours" })
  pollingHours?: string;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Source })
  sources?: Source[];

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=voterServices" })
  voterServices?: string;
}

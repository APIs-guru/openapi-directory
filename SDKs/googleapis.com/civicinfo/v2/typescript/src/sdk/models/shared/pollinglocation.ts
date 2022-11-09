import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimpleAddressType } from "./simpleaddresstype";
import { Source } from "./source";


// PollingLocation
/** 
 * A location where a voter can vote. This may be an early vote site, an election day voting location, or a drop off location for a completed ballot.
**/
export class PollingLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: SimpleAddressType;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=pollingHours" })
  pollingHours?: string;

  @Metadata({ data: "json, name=sources", elemType: shared.Source })
  sources?: Source[];

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;

  @Metadata({ data: "json, name=voterServices" })
  voterServices?: string;
}

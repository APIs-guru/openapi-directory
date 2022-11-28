import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FreeBusyRequestItem } from "./freebusyrequestitem";



export class FreeBusyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calendarExpansionMax" })
  calendarExpansionMax?: number;

  @SpeakeasyMetadata({ data: "json, name=groupExpansionMax" })
  groupExpansionMax?: number;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: FreeBusyRequestItem })
  items?: FreeBusyRequestItem[];

  @SpeakeasyMetadata({ data: "json, name=timeMax" })
  timeMax?: Date;

  @SpeakeasyMetadata({ data: "json, name=timeMin" })
  timeMin?: Date;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}

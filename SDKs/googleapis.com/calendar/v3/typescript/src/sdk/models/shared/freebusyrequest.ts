import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FreeBusyRequestItem } from "./freebusyrequestitem";


export class FreeBusyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=calendarExpansionMax" })
  calendarExpansionMax?: number;

  @Metadata({ data: "json, name=groupExpansionMax" })
  groupExpansionMax?: number;

  @Metadata({ data: "json, name=items", elemType: shared.FreeBusyRequestItem })
  items?: FreeBusyRequestItem[];

  @Metadata({ data: "json, name=timeMax" })
  timeMax?: Date;

  @Metadata({ data: "json, name=timeMin" })
  timeMin?: Date;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}

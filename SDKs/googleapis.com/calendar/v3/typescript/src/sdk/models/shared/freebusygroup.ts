import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


export class FreeBusyGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=calendars" })
  calendars?: string[];

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}

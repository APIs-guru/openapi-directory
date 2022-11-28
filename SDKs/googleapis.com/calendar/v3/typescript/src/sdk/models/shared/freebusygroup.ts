import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Error } from "./error";



export class FreeBusyGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=calendars" })
  calendars?: string[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];
}

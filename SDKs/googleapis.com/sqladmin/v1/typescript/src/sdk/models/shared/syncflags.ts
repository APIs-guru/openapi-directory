import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SyncFlags
/** 
 * Initial sync flags for certain Cloud SQL APIs. Currently used for the MySQL external server initial dump.
**/
export class SyncFlags extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}

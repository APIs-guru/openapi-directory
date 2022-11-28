import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SyncFlags
/** 
 * Initial sync flags for certain Cloud SQL APIs. Currently used for the MySQL external server initial dump.
**/
export class SyncFlags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

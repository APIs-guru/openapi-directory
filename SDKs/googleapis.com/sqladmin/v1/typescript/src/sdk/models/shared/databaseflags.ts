import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatabaseFlags
/** 
 * Database flags for Cloud SQL instances.
**/
export class DatabaseFlags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatabaseFlags
/** 
 * Database flags for Cloud SQL instances.
**/
export class DatabaseFlags extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}

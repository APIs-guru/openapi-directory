import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyRangeLocation
/** 
 * Location information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.
**/
export class KeyRangeLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataDisk" })
  dataDisk?: string;

  @Metadata({ data: "json, name=deliveryEndpoint" })
  deliveryEndpoint?: string;

  @Metadata({ data: "json, name=deprecatedPersistentDirectory" })
  deprecatedPersistentDirectory?: string;

  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=start" })
  start?: string;
}

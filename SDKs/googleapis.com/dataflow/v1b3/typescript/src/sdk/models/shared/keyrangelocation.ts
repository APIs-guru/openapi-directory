import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyRangeLocation
/** 
 * Location information for a specific key-range of a sharded computation. Currently we only support UTF-8 character splits to simplify encoding into JSON.
**/
export class KeyRangeLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataDisk" })
  dataDisk?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryEndpoint" })
  deliveryEndpoint?: string;

  @SpeakeasyMetadata({ data: "json, name=deprecatedPersistentDirectory" })
  deprecatedPersistentDirectory?: string;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}

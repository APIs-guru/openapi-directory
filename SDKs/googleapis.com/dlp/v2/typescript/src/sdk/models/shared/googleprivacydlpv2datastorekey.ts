import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2Key } from "./googleprivacydlpv2key";



// GooglePrivacyDlpV2DatastoreKey
/** 
 * Record key for a finding in Cloud Datastore.
**/
export class GooglePrivacyDlpV2DatastoreKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityKey" })
  entityKey?: GooglePrivacyDlpV2Key;
}

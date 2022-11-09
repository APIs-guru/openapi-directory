import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2Key } from "./googleprivacydlpv2key";


// GooglePrivacyDlpV2DatastoreKey
/** 
 * Record key for a finding in Cloud Datastore.
**/
export class GooglePrivacyDlpV2DatastoreKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityKey" })
  entityKey?: GooglePrivacyDlpV2Key;
}

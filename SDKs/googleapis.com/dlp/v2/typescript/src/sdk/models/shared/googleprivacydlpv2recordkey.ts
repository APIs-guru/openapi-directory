import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryKey } from "./googleprivacydlpv2bigquerykey";
import { GooglePrivacyDlpV2DatastoreKey } from "./googleprivacydlpv2datastorekey";



// GooglePrivacyDlpV2RecordKey
/** 
 * Message for a unique key indicating a record that contains a finding.
**/
export class GooglePrivacyDlpV2RecordKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigQueryKey" })
  bigQueryKey?: GooglePrivacyDlpV2BigQueryKey;

  @SpeakeasyMetadata({ data: "json, name=datastoreKey" })
  datastoreKey?: GooglePrivacyDlpV2DatastoreKey;

  @SpeakeasyMetadata({ data: "json, name=idValues" })
  idValues?: string[];
}

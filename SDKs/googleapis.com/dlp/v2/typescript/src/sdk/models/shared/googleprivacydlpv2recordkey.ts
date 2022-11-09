import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GooglePrivacyDlpV2BigQueryKey } from "./googleprivacydlpv2bigquerykey";
import { GooglePrivacyDlpV2DatastoreKey } from "./googleprivacydlpv2datastorekey";


// GooglePrivacyDlpV2RecordKey
/** 
 * Message for a unique key indicating a record that contains a finding.
**/
export class GooglePrivacyDlpV2RecordKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQueryKey" })
  bigQueryKey?: GooglePrivacyDlpV2BigQueryKey;

  @Metadata({ data: "json, name=datastoreKey" })
  datastoreKey?: GooglePrivacyDlpV2DatastoreKey;

  @Metadata({ data: "json, name=idValues" })
  idValues?: string[];
}

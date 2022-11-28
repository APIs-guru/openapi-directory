import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KindExpression } from "./googleprivacydlpv2kindexpression";
import { GooglePrivacyDlpV2PartitionId } from "./googleprivacydlpv2partitionid";



// GooglePrivacyDlpV2DatastoreOptions
/** 
 * Options defining a data set within Google Cloud Datastore.
**/
export class GooglePrivacyDlpV2DatastoreOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: GooglePrivacyDlpV2KindExpression;

  @SpeakeasyMetadata({ data: "json, name=partitionId" })
  partitionId?: GooglePrivacyDlpV2PartitionId;
}

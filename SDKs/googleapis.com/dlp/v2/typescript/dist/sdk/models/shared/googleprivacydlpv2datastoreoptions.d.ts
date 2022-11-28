import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2KindExpression } from "./googleprivacydlpv2kindexpression";
import { GooglePrivacyDlpV2PartitionId } from "./googleprivacydlpv2partitionid";
/**
 * Options defining a data set within Google Cloud Datastore.
**/
export declare class GooglePrivacyDlpV2DatastoreOptions extends SpeakeasyBase {
    kind?: GooglePrivacyDlpV2KindExpression;
    partitionId?: GooglePrivacyDlpV2PartitionId;
}

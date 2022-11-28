import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2PartitionId } from "./googleprivacydlpv2partitionid";
import { GooglePrivacyDlpV2PathElement } from "./googleprivacydlpv2pathelement";
/**
 * A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
**/
export declare class GooglePrivacyDlpV2Key extends SpeakeasyBase {
    partitionId?: GooglePrivacyDlpV2PartitionId;
    path?: GooglePrivacyDlpV2PathElement[];
}

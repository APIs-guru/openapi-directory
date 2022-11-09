import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GooglePrivacyDlpV2PartitionId } from "./googleprivacydlpv2partitionid";
import { GooglePrivacyDlpV2PathElement } from "./googleprivacydlpv2pathelement";


// GooglePrivacyDlpV2Key
/** 
 * A unique identifier for a Datastore entity. If a key's partition ID or any of its path kinds or names are reserved/read-only, the key is reserved/read-only. A reserved/read-only key is forbidden in certain documented contexts.
**/
export class GooglePrivacyDlpV2Key extends SpeakeasyBase {
  @Metadata({ data: "json, name=partitionId" })
  partitionId?: GooglePrivacyDlpV2PartitionId;

  @Metadata({ data: "json, name=path", elemType: shared.GooglePrivacyDlpV2PathElement })
  path?: GooglePrivacyDlpV2PathElement[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigTableIoDetails } from "./bigtableiodetails";
import { BigQueryIoDetails } from "./bigqueryiodetails";
import { DatastoreIoDetails } from "./datastoreiodetails";
import { FileIoDetails } from "./fileiodetails";
import { PubSubIoDetails } from "./pubsubiodetails";
import { SDKVersion } from "./sdkversion";
import { SpannerIoDetails } from "./spanneriodetails";



// JobMetadata
/** 
 * Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view.
**/
export class JobMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigTableDetails", elemType: BigTableIoDetails })
  bigTableDetails?: BigTableIoDetails[];

  @SpeakeasyMetadata({ data: "json, name=bigqueryDetails", elemType: BigQueryIoDetails })
  bigqueryDetails?: BigQueryIoDetails[];

  @SpeakeasyMetadata({ data: "json, name=datastoreDetails", elemType: DatastoreIoDetails })
  datastoreDetails?: DatastoreIoDetails[];

  @SpeakeasyMetadata({ data: "json, name=fileDetails", elemType: FileIoDetails })
  fileDetails?: FileIoDetails[];

  @SpeakeasyMetadata({ data: "json, name=pubsubDetails", elemType: PubSubIoDetails })
  pubsubDetails?: PubSubIoDetails[];

  @SpeakeasyMetadata({ data: "json, name=sdkVersion" })
  sdkVersion?: SDKVersion;

  @SpeakeasyMetadata({ data: "json, name=spannerDetails", elemType: SpannerIoDetails })
  spannerDetails?: SpannerIoDetails[];
}

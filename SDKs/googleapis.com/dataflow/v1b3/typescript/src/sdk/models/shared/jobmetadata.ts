import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BigTableIoDetails } from "./bigtableiodetails";
import { BigQueryIoDetails } from "./bigqueryiodetails";
import { DatastoreIoDetails } from "./datastoreiodetails";
import { FileIoDetails } from "./fileiodetails";
import { PubSubIoDetails } from "./pubsubiodetails";
import { SdkVersion } from "./sdkversion";
import { SpannerIoDetails } from "./spanneriodetails";


// JobMetadata
/** 
 * Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view.
**/
export class JobMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigTableDetails", elemType: shared.BigTableIoDetails })
  bigTableDetails?: BigTableIoDetails[];

  @Metadata({ data: "json, name=bigqueryDetails", elemType: shared.BigQueryIoDetails })
  bigqueryDetails?: BigQueryIoDetails[];

  @Metadata({ data: "json, name=datastoreDetails", elemType: shared.DatastoreIoDetails })
  datastoreDetails?: DatastoreIoDetails[];

  @Metadata({ data: "json, name=fileDetails", elemType: shared.FileIoDetails })
  fileDetails?: FileIoDetails[];

  @Metadata({ data: "json, name=pubsubDetails", elemType: shared.PubSubIoDetails })
  pubsubDetails?: PubSubIoDetails[];

  @Metadata({ data: "json, name=sdkVersion" })
  sdkVersion?: SdkVersion;

  @Metadata({ data: "json, name=spannerDetails", elemType: shared.SpannerIoDetails })
  spannerDetails?: SpannerIoDetails[];
}

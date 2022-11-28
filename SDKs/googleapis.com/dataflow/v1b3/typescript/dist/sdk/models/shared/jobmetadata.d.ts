import { SpeakeasyBase } from "../../../internal/utils";
import { BigTableIoDetails } from "./bigtableiodetails";
import { BigQueryIoDetails } from "./bigqueryiodetails";
import { DatastoreIoDetails } from "./datastoreiodetails";
import { FileIoDetails } from "./fileiodetails";
import { PubSubIoDetails } from "./pubsubiodetails";
import { SDKVersion } from "./sdkversion";
import { SpannerIoDetails } from "./spanneriodetails";
/**
 * Metadata available primarily for filtering jobs. Will be included in the ListJob response and Job SUMMARY view.
**/
export declare class JobMetadata extends SpeakeasyBase {
    bigTableDetails?: BigTableIoDetails[];
    bigqueryDetails?: BigQueryIoDetails[];
    datastoreDetails?: DatastoreIoDetails[];
    fileDetails?: FileIoDetails[];
    pubsubDetails?: PubSubIoDetails[];
    sdkVersion?: SDKVersion;
    spannerDetails?: SpannerIoDetails[];
}

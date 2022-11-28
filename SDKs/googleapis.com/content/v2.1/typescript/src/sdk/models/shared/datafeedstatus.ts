import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DatafeedStatusError } from "./datafeedstatuserror";



// DatafeedStatus
/** 
 * The status of a datafeed, that is, the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.
**/
export class DatafeedStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=datafeedId" })
  datafeedId?: string;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: DatafeedStatusError })
  errors?: DatafeedStatusError[];

  @SpeakeasyMetadata({ data: "json, name=feedLabel" })
  feedLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=itemsTotal" })
  itemsTotal?: string;

  @SpeakeasyMetadata({ data: "json, name=itemsValid" })
  itemsValid?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUploadDate" })
  lastUploadDate?: string;

  @SpeakeasyMetadata({ data: "json, name=processingStatus" })
  processingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: DatafeedStatusError })
  warnings?: DatafeedStatusError[];
}

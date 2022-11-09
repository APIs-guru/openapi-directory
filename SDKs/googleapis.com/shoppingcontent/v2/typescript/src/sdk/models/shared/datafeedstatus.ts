import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DatafeedStatusError } from "./datafeedstatuserror";
import { DatafeedStatusError } from "./datafeedstatuserror";


// DatafeedStatus
/** 
 * The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.
**/
export class DatafeedStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=datafeedId" })
  datafeedId?: string;

  @Metadata({ data: "json, name=errors", elemType: shared.DatafeedStatusError })
  errors?: DatafeedStatusError[];

  @Metadata({ data: "json, name=itemsTotal" })
  itemsTotal?: string;

  @Metadata({ data: "json, name=itemsValid" })
  itemsValid?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=lastUploadDate" })
  lastUploadDate?: string;

  @Metadata({ data: "json, name=processingStatus" })
  processingStatus?: string;

  @Metadata({ data: "json, name=warnings", elemType: shared.DatafeedStatusError })
  warnings?: DatafeedStatusError[];
}

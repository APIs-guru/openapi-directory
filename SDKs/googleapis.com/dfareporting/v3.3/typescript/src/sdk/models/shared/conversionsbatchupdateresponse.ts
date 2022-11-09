import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConversionStatus } from "./conversionstatus";


// ConversionsBatchUpdateResponse
/** 
 * Update Conversions Response.
**/
export class ConversionsBatchUpdateResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasFailures" })
  hasFailures?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=status", elemType: shared.ConversionStatus })
  status?: ConversionStatus[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConversionStatus } from "./conversionstatus";


// ConversionsBatchInsertResponse
/** 
 * Insert Conversions Response.
**/
export class ConversionsBatchInsertResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasFailures" })
  hasFailures?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=status", elemType: shared.ConversionStatus })
  status?: ConversionStatus[];
}

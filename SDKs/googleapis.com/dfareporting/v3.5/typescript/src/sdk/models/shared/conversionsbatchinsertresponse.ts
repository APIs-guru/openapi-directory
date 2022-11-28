import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConversionStatus } from "./conversionstatus";



// ConversionsBatchInsertResponse
/** 
 * Insert Conversions Response.
**/
export class ConversionsBatchInsertResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasFailures" })
  hasFailures?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=status", elemType: ConversionStatus })
  status?: ConversionStatus[];
}

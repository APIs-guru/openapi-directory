import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LighthouseAuditResultV5
/** 
 * An audit's result object in a Lighthouse result.
**/
export class LighthouseAuditResultV5 extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @Metadata({ data: "json, name=displayValue" })
  displayValue?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=explanation" })
  explanation?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=numericUnit" })
  numericUnit?: string;

  @Metadata({ data: "json, name=numericValue" })
  numericValue?: number;

  @Metadata({ data: "json, name=score" })
  score?: any;

  @Metadata({ data: "json, name=scoreDisplayMode" })
  scoreDisplayMode?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=warnings" })
  warnings?: any;
}

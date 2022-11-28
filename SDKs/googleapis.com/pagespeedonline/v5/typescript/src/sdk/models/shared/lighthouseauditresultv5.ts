import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LighthouseAuditResultV5
/** 
 * An audit's result object in a Lighthouse result.
**/
export class LighthouseAuditResultV5 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=displayValue" })
  displayValue?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=explanation" })
  explanation?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=numericUnit" })
  numericUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=numericValue" })
  numericValue?: number;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: any;

  @SpeakeasyMetadata({ data: "json, name=scoreDisplayMode" })
  scoreDisplayMode?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings?: any;
}

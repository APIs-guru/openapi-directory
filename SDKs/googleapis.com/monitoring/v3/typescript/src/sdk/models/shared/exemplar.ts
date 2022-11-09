import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Exemplar
/** 
 * Exemplars are example points that may be used to annotate aggregated distribution values. They are metadata that gives information about a particular value added to a Distribution bucket, such as a trace ID that was active when a value was added. They may contain further information, such as a example values and timestamps, origin, etc.
**/
export class Exemplar extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachments" })
  attachments?: Map<string, any>[];

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;
}

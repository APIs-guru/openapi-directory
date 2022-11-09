import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomEventClickAnnotation } from "./customeventclickannotation";
import { CustomEventImpressionAnnotation } from "./customeventimpressionannotation";
import { CustomVariable } from "./customvariable";
import { CustomEventInsert } from "./customeventinsert";

export enum CustomEventEventTypeEnum {
    Unknown = "UNKNOWN"
,    Insert = "INSERT"
,    Annotate = "ANNOTATE"
}


// CustomEvent
/** 
 * Experimental feature (no support provided) A custom event represents a third party impression, a third party click, an annotation on a first party impression, or an annotation on a first party click.
**/
export class CustomEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotateClickEvent" })
  annotateClickEvent?: CustomEventClickAnnotation;

  @Metadata({ data: "json, name=annotateImpressionEvent" })
  annotateImpressionEvent?: CustomEventImpressionAnnotation;

  @Metadata({ data: "json, name=customVariables", elemType: shared.CustomVariable })
  customVariables?: CustomVariable[];

  @Metadata({ data: "json, name=eventType" })
  eventType?: CustomEventEventTypeEnum;

  @Metadata({ data: "json, name=floodlightConfigurationId" })
  floodlightConfigurationId?: string;

  @Metadata({ data: "json, name=insertEvent" })
  insertEvent?: CustomEventInsert;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=ordinal" })
  ordinal?: string;

  @Metadata({ data: "json, name=timestampMicros" })
  timestampMicros?: string;
}

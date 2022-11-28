import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomEventClickAnnotation } from "./customeventclickannotation";
import { CustomEventImpressionAnnotation } from "./customeventimpressionannotation";
import { CustomVariable } from "./customvariable";
import { CustomEventInsert } from "./customeventinsert";


export enum CustomEventEventTypeEnum {
    Unknown = "UNKNOWN",
    Insert = "INSERT",
    Annotate = "ANNOTATE"
}


// CustomEvent
/** 
 * Experimental feature (no support provided) A custom event represents a third party impression, a third party click, an annotation on a first party impression, or an annotation on a first party click.
**/
export class CustomEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotateClickEvent" })
  annotateClickEvent?: CustomEventClickAnnotation;

  @SpeakeasyMetadata({ data: "json, name=annotateImpressionEvent" })
  annotateImpressionEvent?: CustomEventImpressionAnnotation;

  @SpeakeasyMetadata({ data: "json, name=customVariables", elemType: CustomVariable })
  customVariables?: CustomVariable[];

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: CustomEventEventTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=floodlightConfigurationId" })
  floodlightConfigurationId?: string;

  @SpeakeasyMetadata({ data: "json, name=insertEvent" })
  insertEvent?: CustomEventInsert;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=ordinal" })
  ordinal?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampMicros" })
  timestampMicros?: string;
}

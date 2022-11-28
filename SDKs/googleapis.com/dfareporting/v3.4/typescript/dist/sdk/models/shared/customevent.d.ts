import { SpeakeasyBase } from "../../../internal/utils";
import { CustomEventClickAnnotation } from "./customeventclickannotation";
import { CustomEventImpressionAnnotation } from "./customeventimpressionannotation";
import { CustomVariable } from "./customvariable";
import { CustomEventInsert } from "./customeventinsert";
export declare enum CustomEventEventTypeEnum {
    Unknown = "UNKNOWN",
    Insert = "INSERT",
    Annotate = "ANNOTATE"
}
/**
 * Experimental feature (no support provided) A custom event represents a third party impression, a third party click, an annotation on a first party impression, or an annotation on a first party click.
**/
export declare class CustomEvent extends SpeakeasyBase {
    annotateClickEvent?: CustomEventClickAnnotation;
    annotateImpressionEvent?: CustomEventImpressionAnnotation;
    customVariables?: CustomVariable[];
    eventType?: CustomEventEventTypeEnum;
    floodlightConfigurationId?: string;
    insertEvent?: CustomEventInsert;
    kind?: string;
    ordinal?: string;
    timestampMicros?: string;
}

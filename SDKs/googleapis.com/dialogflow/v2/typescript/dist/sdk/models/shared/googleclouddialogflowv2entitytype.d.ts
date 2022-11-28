import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EntityTypeEntity } from "./googleclouddialogflowv2entitytypeentity";
export declare enum GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum {
    AutoExpansionModeUnspecified = "AUTO_EXPANSION_MODE_UNSPECIFIED",
    AutoExpansionModeDefault = "AUTO_EXPANSION_MODE_DEFAULT"
}
export declare enum GoogleCloudDialogflowV2EntityTypeKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED",
    KindMap = "KIND_MAP",
    KindList = "KIND_LIST",
    KindRegexp = "KIND_REGEXP"
}
/**
 * Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
**/
export declare class GoogleCloudDialogflowV2EntityType extends SpeakeasyBase {
    autoExpansionMode?: GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum;
    displayName?: string;
    enableFuzzyExtraction?: boolean;
    entities?: GoogleCloudDialogflowV2EntityTypeEntity[];
    kind?: GoogleCloudDialogflowV2EntityTypeKindEnum;
    name?: string;
}

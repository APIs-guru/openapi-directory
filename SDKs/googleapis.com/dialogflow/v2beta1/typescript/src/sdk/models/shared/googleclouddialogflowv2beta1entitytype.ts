import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1EntityTypeEntity } from "./googleclouddialogflowv2beta1entitytypeentity";


export enum GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnum {
    AutoExpansionModeUnspecified = "AUTO_EXPANSION_MODE_UNSPECIFIED",
    AutoExpansionModeDefault = "AUTO_EXPANSION_MODE_DEFAULT"
}

export enum GoogleCloudDialogflowV2beta1EntityTypeKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED",
    KindMap = "KIND_MAP",
    KindList = "KIND_LIST",
    KindRegexp = "KIND_REGEXP"
}


// GoogleCloudDialogflowV2beta1EntityType
/** 
 * Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
**/
export class GoogleCloudDialogflowV2beta1EntityType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoExpansionMode" })
  autoExpansionMode?: GoogleCloudDialogflowV2beta1EntityTypeAutoExpansionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enableFuzzyExtraction" })
  enableFuzzyExtraction?: boolean;

  @SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDialogflowV2beta1EntityTypeEntity })
  entities?: GoogleCloudDialogflowV2beta1EntityTypeEntity[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: GoogleCloudDialogflowV2beta1EntityTypeKindEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}

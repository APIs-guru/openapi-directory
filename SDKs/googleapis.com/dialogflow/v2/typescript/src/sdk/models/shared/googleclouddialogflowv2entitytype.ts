import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2EntityTypeEntity } from "./googleclouddialogflowv2entitytypeentity";

export enum GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum {
    AutoExpansionModeUnspecified = "AUTO_EXPANSION_MODE_UNSPECIFIED"
,    AutoExpansionModeDefault = "AUTO_EXPANSION_MODE_DEFAULT"
}

export enum GoogleCloudDialogflowV2EntityTypeKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED"
,    KindMap = "KIND_MAP"
,    KindList = "KIND_LIST"
,    KindRegexp = "KIND_REGEXP"
}


// GoogleCloudDialogflowV2EntityType
/** 
 * Each intent parameter has a type, called the entity type, which dictates exactly how data from an end-user expression is extracted. Dialogflow provides predefined system entities that can match many common types of data. For example, there are system entities for matching dates, times, colors, email addresses, and so on. You can also create your own custom entities for matching custom data. For example, you could define a vegetable entity that can match the types of vegetables available for purchase with a grocery store agent. For more information, see the [Entity guide](https://cloud.google.com/dialogflow/docs/entities-overview).
**/
export class GoogleCloudDialogflowV2EntityType extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoExpansionMode" })
  autoExpansionMode?: GoogleCloudDialogflowV2EntityTypeAutoExpansionModeEnum;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enableFuzzyExtraction" })
  enableFuzzyExtraction?: boolean;

  @Metadata({ data: "json, name=entities", elemType: shared.GoogleCloudDialogflowV2EntityTypeEntity })
  entities?: GoogleCloudDialogflowV2EntityTypeEntity[];

  @Metadata({ data: "json, name=kind" })
  kind?: GoogleCloudDialogflowV2EntityTypeKindEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}

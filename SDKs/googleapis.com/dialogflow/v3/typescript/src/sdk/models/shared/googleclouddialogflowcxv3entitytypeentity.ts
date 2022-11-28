import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3EntityTypeEntity
/** 
 * An **entity entry** for an associated entity type.
**/
export class GoogleCloudDialogflowCxV3EntityTypeEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=synonyms" })
  synonyms?: string[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

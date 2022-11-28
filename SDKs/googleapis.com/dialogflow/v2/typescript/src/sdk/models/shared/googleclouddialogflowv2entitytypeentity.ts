import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2EntityTypeEntity
/** 
 * An **entity entry** for an associated entity type.
**/
export class GoogleCloudDialogflowV2EntityTypeEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=synonyms" })
  synonyms?: string[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

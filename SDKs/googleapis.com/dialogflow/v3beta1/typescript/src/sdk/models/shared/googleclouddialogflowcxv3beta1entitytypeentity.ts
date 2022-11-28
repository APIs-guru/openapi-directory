import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1EntityTypeEntity
/** 
 * An **entity entry** for an associated entity type.
**/
export class GoogleCloudDialogflowCxV3beta1EntityTypeEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=synonyms" })
  synonyms?: string[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}

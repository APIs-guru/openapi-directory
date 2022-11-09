import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3beta1EntityTypeEntity
/** 
 * An **entity entry** for an associated entity type.
**/
export class GoogleCloudDialogflowCxV3beta1EntityTypeEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=synonyms" })
  synonyms?: string[];

  @Metadata({ data: "json, name=value" })
  value?: string;
}

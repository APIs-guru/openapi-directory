import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3EntityTypeEntity
/** 
 * An **entity entry** for an associated entity type.
**/
export class GoogleCloudDialogflowCxV3EntityTypeEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=synonyms" })
  synonyms?: string[];

  @Metadata({ data: "json, name=value" })
  value?: string;
}

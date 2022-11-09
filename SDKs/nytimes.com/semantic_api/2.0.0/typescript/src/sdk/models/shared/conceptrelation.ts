import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConceptRelation extends SpeakeasyBase {
  @Metadata({ data: "json, name=concept_created" })
  conceptCreated?: string;

  @Metadata({ data: "json, name=concept_id" })
  conceptId?: number;

  @Metadata({ data: "json, name=concept_name" })
  conceptName?: string;

  @Metadata({ data: "json, name=concept_status" })
  conceptStatus?: string;

  @Metadata({ data: "json, name=concept_type" })
  conceptType?: string;

  @Metadata({ data: "json, name=concept_updated" })
  conceptUpdated?: string;

  @Metadata({ data: "json, name=is_times_tag" })
  isTimesTag?: number;

  @Metadata({ data: "json, name=vernacular" })
  vernacular?: string;
}

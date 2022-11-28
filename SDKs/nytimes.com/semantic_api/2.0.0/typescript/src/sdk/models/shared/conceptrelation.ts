import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ConceptRelation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=concept_created" })
  conceptCreated?: string;

  @SpeakeasyMetadata({ data: "json, name=concept_id" })
  conceptId?: number;

  @SpeakeasyMetadata({ data: "json, name=concept_name" })
  conceptName?: string;

  @SpeakeasyMetadata({ data: "json, name=concept_status" })
  conceptStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=concept_type" })
  conceptType?: string;

  @SpeakeasyMetadata({ data: "json, name=concept_updated" })
  conceptUpdated?: string;

  @SpeakeasyMetadata({ data: "json, name=is_times_tag" })
  isTimesTag?: number;

  @SpeakeasyMetadata({ data: "json, name=vernacular" })
  vernacular?: string;
}

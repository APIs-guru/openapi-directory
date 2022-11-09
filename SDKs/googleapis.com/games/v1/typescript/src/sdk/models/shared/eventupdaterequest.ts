import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventUpdateRequest
/** 
 * An event period update resource.
**/
export class EventUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=definitionId" })
  definitionId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=updateCount" })
  updateCount?: string;
}

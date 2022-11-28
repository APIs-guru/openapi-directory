import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventUpdateRequest
/** 
 * An event period update resource.
**/
export class EventUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=definitionId" })
  definitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=updateCount" })
  updateCount?: string;
}

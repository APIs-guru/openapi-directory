import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmbeddedObjectBorder } from "./embeddedobjectborder";



// UpdateEmbeddedObjectBorderRequest
/** 
 * Updates an embedded object's border property.
**/
export class UpdateEmbeddedObjectBorderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=border" })
  border?: EmbeddedObjectBorder;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: number;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmbeddedObjectBorder } from "./embeddedobjectborder";


// UpdateEmbeddedObjectBorderRequest
/** 
 * Updates an embedded object's border property.
**/
export class UpdateEmbeddedObjectBorderRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=border" })
  border?: EmbeddedObjectBorder;

  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: number;
}

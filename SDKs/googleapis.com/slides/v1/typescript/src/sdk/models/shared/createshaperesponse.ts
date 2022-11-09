import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreateShapeResponse
/** 
 * The result of creating a shape.
**/
export class CreateShapeResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=objectId" })
  objectId?: string;
}

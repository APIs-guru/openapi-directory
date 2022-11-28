import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateShapeResponse
/** 
 * The result of creating a shape.
**/
export class CreateShapeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;
}

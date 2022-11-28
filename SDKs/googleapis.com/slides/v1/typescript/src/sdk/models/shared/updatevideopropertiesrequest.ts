import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoProperties } from "./videoproperties";



// UpdateVideoPropertiesRequest
/** 
 * Update the properties of a Video.
**/
export class UpdateVideoPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=videoProperties" })
  videoProperties?: VideoProperties;
}

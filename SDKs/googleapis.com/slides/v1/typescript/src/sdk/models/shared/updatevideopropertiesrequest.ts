import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoProperties } from "./videoproperties";


// UpdateVideoPropertiesRequest
/** 
 * Update the properties of a Video.
**/
export class UpdateVideoPropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: string;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=videoProperties" })
  videoProperties?: VideoProperties;
}

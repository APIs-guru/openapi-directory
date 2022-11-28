import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { ToolOutputReference } from "./tooloutputreference";
import { Thumbnail } from "./thumbnail";



// Image
/** 
 * An image, with a link to the main image and a thumbnail.
**/
export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=sourceImage" })
  sourceImage?: ToolOutputReference;

  @SpeakeasyMetadata({ data: "json, name=stepId" })
  stepId?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: Thumbnail;
}

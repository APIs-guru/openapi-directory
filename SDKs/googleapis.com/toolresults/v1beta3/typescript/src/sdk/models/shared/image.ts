import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";
import { ToolOutputReference } from "./tooloutputreference";
import { Thumbnail } from "./thumbnail";


// Image
/** 
 * An image, with a link to the main image and a thumbnail.
**/
export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=sourceImage" })
  sourceImage?: ToolOutputReference;

  @Metadata({ data: "json, name=stepId" })
  stepId?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: Thumbnail;
}

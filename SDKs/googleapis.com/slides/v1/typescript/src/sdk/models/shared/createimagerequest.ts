import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PageElementProperties } from "./pageelementproperties";


// CreateImageRequest
/** 
 * Creates an image.
**/
export class CreateImageRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=elementProperties" })
  elementProperties?: PageElementProperties;

  @Metadata({ data: "json, name=objectId" })
  objectId?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

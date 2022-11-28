import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageElementProperties } from "./pageelementproperties";



// CreateImageRequest
/** 
 * Creates an image.
**/
export class CreateImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elementProperties" })
  elementProperties?: PageElementProperties;

  @SpeakeasyMetadata({ data: "json, name=objectId" })
  objectId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

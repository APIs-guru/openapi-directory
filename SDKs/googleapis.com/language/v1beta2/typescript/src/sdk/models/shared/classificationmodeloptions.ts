import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { V2Model } from "./v2model";



// ClassificationModelOptions
/** 
 * Model options available for classification requests.
**/
export class ClassificationModelOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=v1Model" })
  v1Model?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=v2Model" })
  v2Model?: V2Model;
}

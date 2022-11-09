import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { V2Model } from "./v2model";


// ClassificationModelOptions
/** 
 * Model options available for classification requests.
**/
export class ClassificationModelOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=v1Model" })
  v1Model?: Map<string, any>;

  @Metadata({ data: "json, name=v2Model" })
  v2Model?: V2Model;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceSpec } from "./instancespec";



// InstanceTemplateSpec
/** 
 * InstanceTemplateSpec describes the data an instance should have when created from a template.
**/
export class InstanceTemplateSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: InstanceSpec;
}

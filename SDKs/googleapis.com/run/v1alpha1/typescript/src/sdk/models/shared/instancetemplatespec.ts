import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceSpec } from "./instancespec";


// InstanceTemplateSpec
/** 
 * InstanceTemplateSpec describes the data an instance should have when created from a template.
**/
export class InstanceTemplateSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=spec" })
  spec?: InstanceSpec;
}

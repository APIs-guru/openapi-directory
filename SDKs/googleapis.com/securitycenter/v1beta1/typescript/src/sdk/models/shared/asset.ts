import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SecurityCenterProperties } from "./securitycenterproperties";
import { GoogleCloudSecuritycenterV1beta1SecurityMarks } from "./googlecloudsecuritycenterv1beta1securitymarks";


// Asset
/** 
 * Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.
**/
export class Asset extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resourceProperties" })
  resourceProperties?: Map<string, any>;

  @Metadata({ data: "json, name=securityCenterProperties" })
  securityCenterProperties?: SecurityCenterProperties;

  @Metadata({ data: "json, name=securityMarks" })
  securityMarks?: GoogleCloudSecuritycenterV1beta1SecurityMarks;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

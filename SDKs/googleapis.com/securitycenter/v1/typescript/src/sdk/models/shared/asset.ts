import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IamPolicy } from "./iampolicy";
import { SecurityCenterProperties } from "./securitycenterproperties";
import { SecurityMarks } from "./securitymarks";



// Asset
/** 
 * Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.
**/
export class Asset extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=canonicalName" })
  canonicalName?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=iamPolicy" })
  iamPolicy?: IamPolicy;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceProperties" })
  resourceProperties?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=securityCenterProperties" })
  securityCenterProperties?: SecurityCenterProperties;

  @SpeakeasyMetadata({ data: "json, name=securityMarks" })
  securityMarks?: SecurityMarks;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

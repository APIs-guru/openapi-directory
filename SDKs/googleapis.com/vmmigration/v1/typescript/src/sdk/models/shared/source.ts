import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VmwareSourceDetails } from "./vmwaresourcedetails";



// Source
/** 
 * Source message describes a specific vm migration Source resource. It contains the source environment information.
**/
export class Source extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=vmware" })
  vmware?: VmwareSourceDetails;
}


// SourceInput
/** 
 * Source message describes a specific vm migration Source resource. It contains the source environment information.
**/
export class SourceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=vmware" })
  vmware?: VmwareSourceDetails;
}

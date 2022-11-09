import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";
import { VmwareSourceDetails } from "./vmwaresourcedetails";


// Source
/** 
 * Source message describes a specific vm migration Source resource. It contains the source environment information.
**/
export class Source extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=vmware" })
  vmware?: VmwareSourceDetails;
}

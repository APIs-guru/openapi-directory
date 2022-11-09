import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NfsExportOptions } from "./nfsexportoptions";

export enum ShareStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Ready = "READY"
,    Deleting = "DELETING"
}


// Share
/** 
 * A Filestore share.
**/
export class Share extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityGb" })
  capacityGb?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=mountName" })
  mountName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nfsExportOptions", elemType: shared.NfsExportOptions })
  nfsExportOptions?: NfsExportOptions[];

  @Metadata({ data: "json, name=state" })
  state?: ShareStateEnum;
}

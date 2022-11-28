import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NfsExportOptions } from "./nfsexportoptions";


export enum ShareStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Ready = "READY",
    Deleting = "DELETING"
}


// Share
/** 
 * A Filestore share.
**/
export class Share extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityGb" })
  capacityGb?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mountName" })
  mountName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nfsExportOptions", elemType: NfsExportOptions })
  nfsExportOptions?: NfsExportOptions[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ShareStateEnum;
}


// ShareInput
/** 
 * A Filestore share.
**/
export class ShareInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityGb" })
  capacityGb?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mountName" })
  mountName?: string;

  @SpeakeasyMetadata({ data: "json, name=nfsExportOptions", elemType: NfsExportOptions })
  nfsExportOptions?: NfsExportOptions[];
}

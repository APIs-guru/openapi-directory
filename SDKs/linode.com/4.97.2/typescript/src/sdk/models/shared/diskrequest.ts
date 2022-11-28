import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilesystemEnum } from "./filesystemenum";



// DiskRequest
/** 
 * Disk object request.
**/
export class DiskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorized_keys" })
  authorizedKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=authorized_users" })
  authorizedUsers?: string[];

  @SpeakeasyMetadata({ data: "json, name=filesystem" })
  filesystem?: FilesystemEnum;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=root_pass" })
  rootPass?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;

  @SpeakeasyMetadata({ data: "json, name=stackscript_data" })
  stackscriptData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=stackscript_id" })
  stackscriptId?: number;
}

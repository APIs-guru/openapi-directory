import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilesystemEnum } from "./filesystemenum";


// DiskRequest
/** 
 * Disk object request.
**/
export class DiskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorized_keys" })
  authorizedKeys?: string[];

  @Metadata({ data: "json, name=authorized_users" })
  authorizedUsers?: string[];

  @Metadata({ data: "json, name=filesystem" })
  filesystem?: FilesystemEnum;

  @Metadata({ data: "json, name=image" })
  image?: string;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=root_pass" })
  rootPass?: string;

  @Metadata({ data: "json, name=size" })
  size: number;

  @Metadata({ data: "json, name=stackscript_data" })
  stackscriptData?: Map<string, any>;

  @Metadata({ data: "json, name=stackscript_id" })
  stackscriptId?: number;
}

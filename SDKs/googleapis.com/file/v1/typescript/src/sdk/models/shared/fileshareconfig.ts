import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NfsExportOptions } from "./nfsexportoptions";


// FileShareConfig
/** 
 * File share configuration for the instance.
**/
export class FileShareConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=capacityGb" })
  capacityGb?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nfsExportOptions", elemType: shared.NfsExportOptions })
  nfsExportOptions?: NfsExportOptions[];

  @Metadata({ data: "json, name=sourceBackup" })
  sourceBackup?: string;
}

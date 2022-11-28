import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NfsExportOptions } from "./nfsexportoptions";



// FileShareConfig
/** 
 * File share configuration for the instance.
**/
export class FileShareConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capacityGb" })
  capacityGb?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nfsExportOptions", elemType: NfsExportOptions })
  nfsExportOptions?: NfsExportOptions[];

  @SpeakeasyMetadata({ data: "json, name=sourceBackup" })
  sourceBackup?: string;
}

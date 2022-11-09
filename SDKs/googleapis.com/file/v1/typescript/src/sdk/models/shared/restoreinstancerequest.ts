import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RestoreInstanceRequest
/** 
 * RestoreInstanceRequest restores an existing instance's file share from a backup.
**/
export class RestoreInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileShare" })
  fileShare?: string;

  @Metadata({ data: "json, name=sourceBackup" })
  sourceBackup?: string;
}

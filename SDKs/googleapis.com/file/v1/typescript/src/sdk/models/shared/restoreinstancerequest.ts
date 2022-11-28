import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RestoreInstanceRequest
/** 
 * RestoreInstanceRequest restores an existing instance's file share from a backup.
**/
export class RestoreInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileShare" })
  fileShare?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceBackup" })
  sourceBackup?: string;
}

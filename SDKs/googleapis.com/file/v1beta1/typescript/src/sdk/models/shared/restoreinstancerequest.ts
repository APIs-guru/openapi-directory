import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RestoreInstanceRequest
/** 
 * RestoreInstanceRequest restores an existing instance's file share from a snapshot or backup.
**/
export class RestoreInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileShare" })
  fileShare?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceBackup" })
  sourceBackup?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceSnapshot" })
  sourceSnapshot?: string;
}

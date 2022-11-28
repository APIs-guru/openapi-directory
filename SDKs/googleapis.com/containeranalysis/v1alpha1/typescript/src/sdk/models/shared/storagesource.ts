import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StorageSource
/** 
 * StorageSource describes the location of the source in an archive file in Google Cloud Storage.
**/
export class StorageSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bucket" })
  bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object?: string;
}

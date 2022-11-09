import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StorageSource
/** 
 * Location of the source in an archive file in Google Cloud Storage.
**/
export class StorageSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=bucket" })
  bucket?: string;

  @Metadata({ data: "json, name=generation" })
  generation?: string;

  @Metadata({ data: "json, name=object" })
  object?: string;
}

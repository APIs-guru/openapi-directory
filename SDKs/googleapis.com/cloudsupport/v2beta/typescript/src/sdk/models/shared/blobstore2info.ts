import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Blobstore2Info
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class Blobstore2Info extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blobGeneration" })
  blobGeneration?: string;

  @SpeakeasyMetadata({ data: "json, name=blobId" })
  blobId?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadReadHandle" })
  downloadReadHandle?: string;

  @SpeakeasyMetadata({ data: "json, name=readToken" })
  readToken?: string;

  @SpeakeasyMetadata({ data: "json, name=uploadMetadataContainer" })
  uploadMetadataContainer?: string;
}

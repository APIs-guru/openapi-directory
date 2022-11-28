import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GdataBlobstore2Info
/** 
 * gdata
**/
export class GdataBlobstore2Info extends SpeakeasyBase {
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

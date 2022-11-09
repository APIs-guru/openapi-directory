import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Blobstore2Info
/** 
 * # gdata.* are outside protos with mising documentation
**/
export class Blobstore2Info extends SpeakeasyBase {
  @Metadata({ data: "json, name=blobGeneration" })
  blobGeneration?: string;

  @Metadata({ data: "json, name=blobId" })
  blobId?: string;

  @Metadata({ data: "json, name=downloadReadHandle" })
  downloadReadHandle?: string;

  @Metadata({ data: "json, name=readToken" })
  readToken?: string;

  @Metadata({ data: "json, name=uploadMetadataContainer" })
  uploadMetadataContainer?: string;
}

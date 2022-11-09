import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignBlobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyId" })
  keyId?: string;

  @Metadata({ data: "json, name=signedBlob" })
  signedBlob?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignBlobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=signedBlob" })
  signedBlob?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeysWithPrivateKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=private_key" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=public_key" })
  publicKey?: string;
}

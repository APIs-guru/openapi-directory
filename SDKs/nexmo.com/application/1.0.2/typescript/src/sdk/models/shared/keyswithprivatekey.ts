import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeysWithPrivateKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=private_key" })
  privateKey?: string;

  @Metadata({ data: "json, name=public_key" })
  publicKey?: string;
}

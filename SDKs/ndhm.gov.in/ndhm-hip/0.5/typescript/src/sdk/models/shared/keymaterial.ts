import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyObject } from "./keyobject";


export class KeyMaterial extends SpeakeasyBase {
  @Metadata({ data: "json, name=cryptoAlg" })
  cryptoAlg: string;

  @Metadata({ data: "json, name=curve" })
  curve: string;

  @Metadata({ data: "json, name=dhPublicKey" })
  dhPublicKey: KeyObject;

  @Metadata({ data: "json, name=nonce" })
  nonce: string;
}

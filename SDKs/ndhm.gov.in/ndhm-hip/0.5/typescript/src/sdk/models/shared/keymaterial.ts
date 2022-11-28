import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyObject } from "./keyobject";



export class KeyMaterial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cryptoAlg" })
  cryptoAlg: string;

  @SpeakeasyMetadata({ data: "json, name=curve" })
  curve: string;

  @SpeakeasyMetadata({ data: "json, name=dhPublicKey" })
  dhPublicKey: KeyObject;

  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce: string;
}

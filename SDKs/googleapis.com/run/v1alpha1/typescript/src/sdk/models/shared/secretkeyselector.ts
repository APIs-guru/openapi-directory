import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";



// SecretKeySelector
/** 
 * SecretKeySelector selects a key of a Secret.
**/
export class SecretKeySelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=localObjectReference" })
  localObjectReference?: LocalObjectReference;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=optional" })
  optional?: boolean;
}

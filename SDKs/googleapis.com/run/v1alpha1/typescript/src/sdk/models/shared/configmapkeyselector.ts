import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalObjectReference } from "./localobjectreference";



// ConfigMapKeySelector
/** 
 * Not supported by Cloud Run Selects a key from a ConfigMap.
**/
export class ConfigMapKeySelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=localObjectReference" })
  localObjectReference?: LocalObjectReference;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=optional" })
  optional?: boolean;
}

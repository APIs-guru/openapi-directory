import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalObjectReference } from "./localobjectreference";


// ConfigMapKeySelector
/** 
 * Not supported by Cloud Run Selects a key from a ConfigMap.
**/
export class ConfigMapKeySelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=localObjectReference" })
  localObjectReference?: LocalObjectReference;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=optional" })
  optional?: boolean;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalObjectReference } from "./localobjectreference";


// SecretKeySelector
/** 
 * SecretKeySelector selects a key of a Secret.
**/
export class SecretKeySelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=localObjectReference" })
  localObjectReference?: LocalObjectReference;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=optional" })
  optional?: boolean;
}

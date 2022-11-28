import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TypeMeta
/** 
 * TypeMeta is the type information needed for content unmarshalling of Kubernetes resources in the manifest.
**/
export class TypeMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}

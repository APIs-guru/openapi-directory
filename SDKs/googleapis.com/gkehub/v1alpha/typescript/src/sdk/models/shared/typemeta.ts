import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TypeMeta
/** 
 * TypeMeta is the type information needed for content unmarshalling of Kubernetes resources in the manifest.
**/
export class TypeMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}

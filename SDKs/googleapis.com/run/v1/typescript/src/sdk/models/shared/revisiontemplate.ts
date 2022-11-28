import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { RevisionSpec } from "./revisionspec";



// RevisionTemplate
/** 
 * RevisionTemplateSpec describes the data a revision should have when created from a template. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
**/
export class RevisionTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: RevisionSpec;
}

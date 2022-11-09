import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ObjectMeta } from "./objectmeta";
import { RevisionSpec } from "./revisionspec";
import { RevisionStatus } from "./revisionstatus";


// Revision
/** 
 * Revision is an immutable snapshot of code and configuration. A revision references a container image. Revisions are created by updates to a Configuration. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#revision
**/
export class Revision extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @Metadata({ data: "json, name=spec" })
  spec?: RevisionSpec;

  @Metadata({ data: "json, name=status" })
  status?: RevisionStatus;
}

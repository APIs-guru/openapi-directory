import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Container } from "./container";
import { LocalObjectReference } from "./localobjectreference";
import { Volume } from "./volume";


// RevisionSpec
/** 
 * RevisionSpec holds the desired state of the Revision (from the client).
**/
export class RevisionSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerConcurrency" })
  containerConcurrency?: number;

  @Metadata({ data: "json, name=containers", elemType: shared.Container })
  containers?: Container[];

  @Metadata({ data: "json, name=enableServiceLinks" })
  enableServiceLinks?: boolean;

  @Metadata({ data: "json, name=imagePullSecrets", elemType: shared.LocalObjectReference })
  imagePullSecrets?: LocalObjectReference[];

  @Metadata({ data: "json, name=serviceAccountName" })
  serviceAccountName?: string;

  @Metadata({ data: "json, name=timeoutSeconds" })
  timeoutSeconds?: number;

  @Metadata({ data: "json, name=volumes", elemType: shared.Volume })
  volumes?: Volume[];
}

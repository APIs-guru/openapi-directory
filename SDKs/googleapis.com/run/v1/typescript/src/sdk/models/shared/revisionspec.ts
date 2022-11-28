import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
import { LocalObjectReference } from "./localobjectreference";
import { Volume } from "./volume";



// RevisionSpec
/** 
 * RevisionSpec holds the desired state of the Revision (from the client).
**/
export class RevisionSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerConcurrency" })
  containerConcurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=containers", elemType: Container })
  containers?: Container[];

  @SpeakeasyMetadata({ data: "json, name=enableServiceLinks" })
  enableServiceLinks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=imagePullSecrets", elemType: LocalObjectReference })
  imagePullSecrets?: LocalObjectReference[];

  @SpeakeasyMetadata({ data: "json, name=serviceAccountName" })
  serviceAccountName?: string;

  @SpeakeasyMetadata({ data: "json, name=timeoutSeconds" })
  timeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: Volume })
  volumes?: Volume[];
}

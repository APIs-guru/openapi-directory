import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext } from "./googledevtoolscontaineranalysisv1alpha1cloudreposourcecontext";
import { GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext } from "./googledevtoolscontaineranalysisv1alpha1gerritsourcecontext";
import { GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext } from "./googledevtoolscontaineranalysisv1alpha1gitsourcecontext";



// GoogleDevtoolsContaineranalysisV1alpha1SourceContext
/** 
 * A SourceContext is a reference to a tree of files. A SourceContext together with a path point to a unique revision of a single file or directory.
**/
export class GoogleDevtoolsContaineranalysisV1alpha1SourceContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudRepo" })
  cloudRepo?: GoogleDevtoolsContaineranalysisV1alpha1CloudRepoSourceContext;

  @SpeakeasyMetadata({ data: "json, name=gerrit" })
  gerrit?: GoogleDevtoolsContaineranalysisV1alpha1GerritSourceContext;

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: GoogleDevtoolsContaineranalysisV1alpha1GitSourceContext;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}

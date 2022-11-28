import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { ConfigurationSpec } from "./configurationspec";
import { ConfigurationStatus } from "./configurationstatus";



// Configuration
/** 
 * Configuration represents the "floating HEAD" of a linear history of Revisions, and optionally how the containers those revisions reference are built. Users create new Revisions by updating the Configuration's spec. The "latest created" revision's name is available under status, as is the "latest ready" revision's name. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#configuration
**/
export class Configuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apiVersion" })
  apiVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: ObjectMeta;

  @SpeakeasyMetadata({ data: "json, name=spec" })
  spec?: ConfigurationSpec;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ConfigurationStatus;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementGitConfig } from "./configmanagementgitconfig";
import { ConfigManagementOciConfig } from "./configmanagementociconfig";



// ConfigManagementConfigSync
/** 
 * Configuration for Config Sync
**/
export class ConfigManagementConfigSync extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowVerticalScale" })
  allowVerticalScale?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: ConfigManagementGitConfig;

  @SpeakeasyMetadata({ data: "json, name=oci" })
  oci?: ConfigManagementOciConfig;

  @SpeakeasyMetadata({ data: "json, name=preventDrift" })
  preventDrift?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sourceFormat" })
  sourceFormat?: string;
}

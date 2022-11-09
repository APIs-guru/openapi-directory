import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigManagementGitConfig } from "./configmanagementgitconfig";
import { ConfigManagementOciConfig } from "./configmanagementociconfig";


// ConfigManagementConfigSync
/** 
 * Configuration for Config Sync
**/
export class ConfigManagementConfigSync extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowVerticalScale" })
  allowVerticalScale?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=git" })
  git?: ConfigManagementGitConfig;

  @Metadata({ data: "json, name=oci" })
  oci?: ConfigManagementOciConfig;

  @Metadata({ data: "json, name=preventDrift" })
  preventDrift?: boolean;

  @Metadata({ data: "json, name=sourceFormat" })
  sourceFormat?: string;
}

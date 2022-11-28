import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1Rule } from "./googlecloudassetv1rule";



// AnalyzerOrgPolicy
/** 
 * This organization policy message is a modified version of the one defined in the OrgPolicy system. This message contains several fields defined in the original organization policy with some new fields for analysis purpose.
**/
export class AnalyzerOrgPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedResource" })
  appliedResource?: string;

  @SpeakeasyMetadata({ data: "json, name=attachedResource" })
  attachedResource?: string;

  @SpeakeasyMetadata({ data: "json, name=inheritFromParent" })
  inheritFromParent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=reset" })
  reset?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: GoogleCloudAssetV1Rule })
  rules?: GoogleCloudAssetV1Rule[];
}

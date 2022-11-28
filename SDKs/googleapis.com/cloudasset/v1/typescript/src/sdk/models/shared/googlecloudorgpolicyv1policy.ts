import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudOrgpolicyV1BooleanPolicy } from "./googlecloudorgpolicyv1booleanpolicy";
import { GoogleCloudOrgpolicyV1ListPolicy } from "./googlecloudorgpolicyv1listpolicy";



// GoogleCloudOrgpolicyV1Policy
/** 
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export class GoogleCloudOrgpolicyV1Policy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanPolicy" })
  booleanPolicy?: GoogleCloudOrgpolicyV1BooleanPolicy;

  @SpeakeasyMetadata({ data: "json, name=constraint" })
  constraint?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=listPolicy" })
  listPolicy?: GoogleCloudOrgpolicyV1ListPolicy;

  @SpeakeasyMetadata({ data: "json, name=restoreDefault" })
  restoreDefault?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}

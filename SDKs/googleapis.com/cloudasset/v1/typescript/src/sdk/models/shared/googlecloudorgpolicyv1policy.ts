import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudOrgpolicyV1BooleanPolicy } from "./googlecloudorgpolicyv1booleanpolicy";
import { GoogleCloudOrgpolicyV1ListPolicy } from "./googlecloudorgpolicyv1listpolicy";


// GoogleCloudOrgpolicyV1Policy
/** 
 * Defines a Cloud Organization `Policy` which is used to specify `Constraints` for configurations of Cloud Platform resources.
**/
export class GoogleCloudOrgpolicyV1Policy extends SpeakeasyBase {
  @Metadata({ data: "json, name=booleanPolicy" })
  booleanPolicy?: GoogleCloudOrgpolicyV1BooleanPolicy;

  @Metadata({ data: "json, name=constraint" })
  constraint?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=listPolicy" })
  listPolicy?: GoogleCloudOrgpolicyV1ListPolicy;

  @Metadata({ data: "json, name=restoreDefault" })
  restoreDefault?: Map<string, any>;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}

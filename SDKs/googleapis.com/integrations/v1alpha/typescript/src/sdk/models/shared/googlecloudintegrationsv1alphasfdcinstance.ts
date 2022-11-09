import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaSfdcInstance
/** 
 * The SfdcInstance resource use to hold channels and connection config data.
**/
export class GoogleCloudIntegrationsV1alphaSfdcInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=authConfigId" })
  authConfigId?: string[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serviceAuthority" })
  serviceAuthority?: string;

  @Metadata({ data: "json, name=sfdcOrgId" })
  sfdcOrgId?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

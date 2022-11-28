import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaSfdcInstanceInput
/** 
 * The SfdcInstance resource use to hold channels and connection config data.
**/
export class GoogleCloudIntegrationsV1alphaSfdcInstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authConfigId" })
  authConfigId?: string[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAuthority" })
  serviceAuthority?: string;

  @SpeakeasyMetadata({ data: "json, name=sfdcOrgId" })
  sfdcOrgId?: string;
}


// GoogleCloudIntegrationsV1alphaSfdcInstance
/** 
 * The SfdcInstance resource use to hold channels and connection config data.
**/
export class GoogleCloudIntegrationsV1alphaSfdcInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authConfigId" })
  authConfigId?: string[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAuthority" })
  serviceAuthority?: string;

  @SpeakeasyMetadata({ data: "json, name=sfdcOrgId" })
  sfdcOrgId?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}

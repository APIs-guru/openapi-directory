import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig
/** 
 * Additional config for Apple for code flow.
**/
export class GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyId" })
  keyId?: string;

  @Metadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @Metadata({ data: "json, name=teamId" })
  teamId?: string;
}

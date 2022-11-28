import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig
/** 
 * Additional config for Apple for code flow.
**/
export class GoogleCloudIdentitytoolkitAdminV2CodeFlowConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=keyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId?: string;
}

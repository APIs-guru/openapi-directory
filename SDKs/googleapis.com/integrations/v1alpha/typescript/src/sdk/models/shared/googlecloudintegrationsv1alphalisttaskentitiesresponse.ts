import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmFrontendsEventbusProtoTaskEntity } from "./enterprisecrmfrontendseventbusprototaskentity";



// GoogleCloudIntegrationsV1alphaListTaskEntitiesResponse
/** 
 * This is a UI only method and will be moved away. Response for ListTaskEntities.
**/
export class GoogleCloudIntegrationsV1alphaListTaskEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=taskEntities", elemType: EnterpriseCrmFrontendsEventbusProtoTaskEntity })
  taskEntities?: EnterpriseCrmFrontendsEventbusProtoTaskEntity[];
}

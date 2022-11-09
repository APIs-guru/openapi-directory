import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EnterpriseCrmFrontendsEventbusProtoTaskEntity } from "./enterprisecrmfrontendseventbusprototaskentity";


// GoogleCloudIntegrationsV1alphaListTaskEntitiesResponse
/** 
 * This is a UI only method and will be moved away. Response for ListTaskEntities.
**/
export class GoogleCloudIntegrationsV1alphaListTaskEntitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=taskEntities", elemType: shared.EnterpriseCrmFrontendsEventbusProtoTaskEntity })
  taskEntities?: EnterpriseCrmFrontendsEventbusProtoTaskEntity[];
}

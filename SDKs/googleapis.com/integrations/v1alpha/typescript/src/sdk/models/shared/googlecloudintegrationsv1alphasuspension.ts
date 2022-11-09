import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig } from "./googlecloudintegrationsv1alphasuspensionapprovalconfig";
import { GoogleCloudIntegrationsV1alphaSuspensionAudit } from "./googlecloudintegrationsv1alphasuspensionaudit";
import { EnterpriseCrmEventbusProtoSuspensionConfig } from "./enterprisecrmeventbusprotosuspensionconfig";

export enum GoogleCloudIntegrationsV1alphaSuspensionStateEnum {
    ResolutionStateUnspecified = "RESOLUTION_STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Rejected = "REJECTED"
,    Lifted = "LIFTED"
}


// GoogleCloudIntegrationsV1alphaSuspension
/** 
 * A record representing a suspension.
**/
export class GoogleCloudIntegrationsV1alphaSuspension extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalConfig" })
  approvalConfig?: GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig;

  @Metadata({ data: "json, name=audit" })
  audit?: GoogleCloudIntegrationsV1alphaSuspensionAudit;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=eventExecutionInfoId" })
  eventExecutionInfoId?: string;

  @Metadata({ data: "json, name=integration" })
  integration?: string;

  @Metadata({ data: "json, name=lastModifyTime" })
  lastModifyTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudIntegrationsV1alphaSuspensionStateEnum;

  @Metadata({ data: "json, name=suspensionConfig" })
  suspensionConfig?: EnterpriseCrmEventbusProtoSuspensionConfig;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}

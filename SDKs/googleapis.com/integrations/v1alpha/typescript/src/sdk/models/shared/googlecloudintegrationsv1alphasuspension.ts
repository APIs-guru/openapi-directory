import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig } from "./googlecloudintegrationsv1alphasuspensionapprovalconfig";
import { GoogleCloudIntegrationsV1alphaSuspensionAudit } from "./googlecloudintegrationsv1alphasuspensionaudit";
import { EnterpriseCrmEventbusProtoSuspensionConfig } from "./enterprisecrmeventbusprotosuspensionconfig";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput } from "./googlecloudintegrationsv1alphasuspensionapprovalconfig";


export enum GoogleCloudIntegrationsV1alphaSuspensionStateEnum {
    ResolutionStateUnspecified = "RESOLUTION_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Rejected = "REJECTED",
    Lifted = "LIFTED"
}


// GoogleCloudIntegrationsV1alphaSuspension
/** 
 * A record representing a suspension.
**/
export class GoogleCloudIntegrationsV1alphaSuspension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalConfig" })
  approvalConfig?: GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig;

  @SpeakeasyMetadata({ data: "json, name=audit" })
  audit?: GoogleCloudIntegrationsV1alphaSuspensionAudit;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=eventExecutionInfoId" })
  eventExecutionInfoId?: string;

  @SpeakeasyMetadata({ data: "json, name=integration" })
  integration?: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifyTime" })
  lastModifyTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudIntegrationsV1alphaSuspensionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=suspensionConfig" })
  suspensionConfig?: EnterpriseCrmEventbusProtoSuspensionConfig;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}


// GoogleCloudIntegrationsV1alphaSuspensionInput
/** 
 * A record representing a suspension.
**/
export class GoogleCloudIntegrationsV1alphaSuspensionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalConfig" })
  approvalConfig?: GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput;

  @SpeakeasyMetadata({ data: "json, name=audit" })
  audit?: GoogleCloudIntegrationsV1alphaSuspensionAudit;

  @SpeakeasyMetadata({ data: "json, name=eventExecutionInfoId" })
  eventExecutionInfoId?: string;

  @SpeakeasyMetadata({ data: "json, name=integration" })
  integration?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudIntegrationsV1alphaSuspensionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=suspensionConfig" })
  suspensionConfig?: EnterpriseCrmEventbusProtoSuspensionConfig;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}

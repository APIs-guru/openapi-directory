import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig } from "./googlecloudintegrationsv1alphasuspensionapprovalconfig";
import { GoogleCloudIntegrationsV1alphaSuspensionAudit } from "./googlecloudintegrationsv1alphasuspensionaudit";
import { EnterpriseCrmEventbusProtoSuspensionConfig } from "./enterprisecrmeventbusprotosuspensionconfig";
import { GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput } from "./googlecloudintegrationsv1alphasuspensionapprovalconfig";
export declare enum GoogleCloudIntegrationsV1alphaSuspensionStateEnum {
    ResolutionStateUnspecified = "RESOLUTION_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Rejected = "REJECTED",
    Lifted = "LIFTED"
}
/**
 * A record representing a suspension.
**/
export declare class GoogleCloudIntegrationsV1alphaSuspension extends SpeakeasyBase {
    approvalConfig?: GoogleCloudIntegrationsV1alphaSuspensionApprovalConfig;
    audit?: GoogleCloudIntegrationsV1alphaSuspensionAudit;
    createTime?: string;
    eventExecutionInfoId?: string;
    integration?: string;
    lastModifyTime?: string;
    name?: string;
    state?: GoogleCloudIntegrationsV1alphaSuspensionStateEnum;
    suspensionConfig?: EnterpriseCrmEventbusProtoSuspensionConfig;
    taskId?: string;
}
/**
 * A record representing a suspension.
**/
export declare class GoogleCloudIntegrationsV1alphaSuspensionInput extends SpeakeasyBase {
    approvalConfig?: GoogleCloudIntegrationsV1alphaSuspensionApprovalConfigInput;
    audit?: GoogleCloudIntegrationsV1alphaSuspensionAudit;
    eventExecutionInfoId?: string;
    integration?: string;
    name?: string;
    state?: GoogleCloudIntegrationsV1alphaSuspensionStateEnum;
    suspensionConfig?: EnterpriseCrmEventbusProtoSuspensionConfig;
    taskId?: string;
}

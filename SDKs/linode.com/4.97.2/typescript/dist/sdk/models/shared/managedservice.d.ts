import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ManagedServiceServiceTypeEnum {
    Url = "url",
    Tcp = "tcp"
}
export declare enum ManagedServiceStatusEnum {
    Disabled = "disabled",
    Pending = "pending",
    Ok = "ok",
    Problem = "problem"
}
/**
 * A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
 *
**/
export declare class ManagedServiceInput extends SpeakeasyBase {
    address?: string;
    body?: string;
    consultationGroup?: string;
    credentials?: number[];
    label?: string;
    notes?: string;
    region?: string;
    serviceType?: ManagedServiceServiceTypeEnum;
    timeout?: number;
}
/**
 * A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
 *
**/
export declare class ManagedService extends SpeakeasyBase {
    address?: string;
    body?: string;
    consultationGroup?: string;
    created?: Date;
    credentials?: number[];
    id?: number;
    label?: string;
    notes?: string;
    region?: string;
    serviceType?: ManagedServiceServiceTypeEnum;
    status?: ManagedServiceStatusEnum;
    timeout?: number;
    updated?: Date;
}

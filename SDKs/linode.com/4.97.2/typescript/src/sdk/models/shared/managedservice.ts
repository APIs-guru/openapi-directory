import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ManagedServiceServiceTypeEnum {
    Url = "url"
,    Tcp = "tcp"
}

export enum ManagedServiceStatusEnum {
    Disabled = "disabled"
,    Pending = "pending"
,    Ok = "ok"
,    Problem = "problem"
}


// ManagedService
/** 
 * A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
 * 
**/
export class ManagedService extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=consultation_group" })
  consultationGroup?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=credentials" })
  credentials?: number[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=service_type" })
  serviceType?: ManagedServiceServiceTypeEnum;

  @Metadata({ data: "json, name=status" })
  status?: ManagedServiceStatusEnum;

  @Metadata({ data: "json, name=timeout" })
  timeout?: number;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}

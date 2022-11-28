import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ManagedServiceServiceTypeEnum {
    Url = "url",
    Tcp = "tcp"
}

export enum ManagedServiceStatusEnum {
    Disabled = "disabled",
    Pending = "pending",
    Ok = "ok",
    Problem = "problem"
}


// ManagedServiceInput
/** 
 * A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
 * 
**/
export class ManagedServiceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=consultation_group" })
  consultationGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: number[];

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=service_type" })
  serviceType?: ManagedServiceServiceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: number;
}


// ManagedService
/** 
 * A service that Linode is monitoring as part of your Managed services. If issues are detected with this service, a ManagedIssue will be opened and, optionally, Linode special forces will attempt to resolve the Issue.
 * 
**/
export class ManagedService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=consultation_group" })
  consultationGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=credentials" })
  credentials?: number[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=service_type" })
  serviceType?: ManagedServiceServiceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ManagedServiceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: number;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableVirtualMachine extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster: number;

  @Metadata({ data: "json, name=comments" })
  comments?: string;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=custom_fields" })
  customFields?: Map<string, any>;

  @Metadata({ data: "json, name=disk" })
  disk?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_updated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=local_context_data" })
  localContextData?: string;

  @Metadata({ data: "json, name=memory" })
  memory?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=platform" })
  platform?: number;

  @Metadata({ data: "json, name=primary_ip" })
  primaryIp?: string;

  @Metadata({ data: "json, name=primary_ip4" })
  primaryIp4?: number;

  @Metadata({ data: "json, name=primary_ip6" })
  primaryIp6?: number;

  @Metadata({ data: "json, name=role" })
  role?: number;

  @Metadata({ data: "json, name=site" })
  site?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=tenant" })
  tenant?: number;

  @Metadata({ data: "json, name=vcpus" })
  vcpus?: number;
}

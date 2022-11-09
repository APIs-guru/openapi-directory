import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegionResolvers extends SpeakeasyBase {
  @Metadata({ data: "json, name=ipv4" })
  ipv4?: string;

  @Metadata({ data: "json, name=ipv6" })
  ipv6?: string;
}

export enum RegionStatusEnum {
    Ok = "ok"
,    Outage = "outage"
}


// Region
/** 
 * An area where Linode services are available.
**/
export class Region extends SpeakeasyBase {
  @Metadata({ data: "json, name=capabilities" })
  capabilities?: string[];

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=resolvers" })
  resolvers?: RegionResolvers;

  @Metadata({ data: "json, name=status" })
  status?: RegionStatusEnum;
}

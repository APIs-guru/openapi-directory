import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegionResolvers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipv4" })
  ipv4?: string;

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6?: string;
}

export enum RegionStatusEnum {
    Ok = "ok",
    Outage = "outage"
}


// Region
/** 
 * An area where Linode services are available.
**/
export class Region extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: string[];

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=resolvers" })
  resolvers?: RegionResolvers;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RegionStatusEnum;
}

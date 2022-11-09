import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NestedRack } from "./nestedrack";
import { NestedTenant } from "./nestedtenant";
import { NestedUser } from "./nesteduser";


export class RackReservation extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=rack" })
  rack: NestedRack;

  @Metadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @Metadata({ data: "json, name=units" })
  units: number[];

  @Metadata({ data: "json, name=user" })
  user: NestedUser;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NestedRack } from "./nestedrack";
import { NestedTenant } from "./nestedtenant";
import { NestedUser } from "./nesteduser";



export class RackReservation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=rack" })
  rack: NestedRack;

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: NestedTenant;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units: number[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: NestedUser;
}

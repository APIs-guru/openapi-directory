import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WritableRackReservation extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=rack" })
  rack: number;

  @Metadata({ data: "json, name=tenant" })
  tenant?: number;

  @Metadata({ data: "json, name=units" })
  units: number[];

  @Metadata({ data: "json, name=user" })
  user: number;
}

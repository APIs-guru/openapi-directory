import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WritableRackReservationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=rack" })
  rack: number;

  @SpeakeasyMetadata({ data: "json, name=tenant" })
  tenant?: number;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units: number[];

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: number;
}

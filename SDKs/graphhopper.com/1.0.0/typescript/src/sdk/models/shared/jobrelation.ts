import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobRelation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=vehicle_id" })
  vehicleId?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobRelation extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: string[];

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=vehicle_id" })
  vehicleId?: string;
}

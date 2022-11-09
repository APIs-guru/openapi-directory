import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MissDistance } from "./missdistance";
import { RelVelocity } from "./relvelocity";


export class CloseApproachData extends SpeakeasyBase {
  @Metadata({ data: "json, name=close_approach_date" })
  closeApproachDate?: string;

  @Metadata({ data: "json, name=close_approach_date_full" })
  closeApproachDateFull?: string;

  @Metadata({ data: "json, name=epoch_date_close_approach" })
  epochDateCloseApproach?: number;

  @Metadata({ data: "json, name=miss_distance" })
  missDistance?: MissDistance;

  @Metadata({ data: "json, name=orbiting_body" })
  orbitingBody?: string;

  @Metadata({ data: "json, name=relative_velocity" })
  relativeVelocity?: RelVelocity;
}

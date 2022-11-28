import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MissDistance } from "./missdistance";
import { RelVelocity } from "./relvelocity";



export class CloseApproachData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=close_approach_date" })
  closeApproachDate?: string;

  @SpeakeasyMetadata({ data: "json, name=close_approach_date_full" })
  closeApproachDateFull?: string;

  @SpeakeasyMetadata({ data: "json, name=epoch_date_close_approach" })
  epochDateCloseApproach?: number;

  @SpeakeasyMetadata({ data: "json, name=miss_distance" })
  missDistance?: MissDistance;

  @SpeakeasyMetadata({ data: "json, name=orbiting_body" })
  orbitingBody?: string;

  @SpeakeasyMetadata({ data: "json, name=relative_velocity" })
  relativeVelocity?: RelVelocity;
}

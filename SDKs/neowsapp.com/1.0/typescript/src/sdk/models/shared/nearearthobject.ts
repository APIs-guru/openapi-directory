import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloseApproachData } from "./closeapproachdata";
import { EstimatedDiameterContainer } from "./estimateddiametercontainer";
import { OrbitalData } from "./orbitaldata";



export class NearEarthObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=absolute_magnitude_h" })
  absoluteMagnitudeH?: number;

  @SpeakeasyMetadata({ data: "json, name=close_approach_data", elemType: CloseApproachData })
  closeApproachData?: CloseApproachData[];

  @SpeakeasyMetadata({ data: "json, name=designation" })
  designation?: string;

  @SpeakeasyMetadata({ data: "json, name=estimated_diameter" })
  estimatedDiameter?: EstimatedDiameterContainer;

  @SpeakeasyMetadata({ data: "json, name=is_potentially_hazardous_asteroid" })
  isPotentiallyHazardousAsteroid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_sentry_object" })
  isSentryObject?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=name_limited" })
  nameLimited?: string;

  @SpeakeasyMetadata({ data: "json, name=nasa_jpl_url" })
  nasaJplUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=neo_reference_id" })
  neoReferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=orbital_data" })
  orbitalData?: OrbitalData;

  @SpeakeasyMetadata({ data: "json, name=sentry_data" })
  sentryData?: string;
}

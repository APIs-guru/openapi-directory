import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CloseApproachData } from "./closeapproachdata";
import { EstimatedDiameterContainer } from "./estimateddiametercontainer";
import { OrbitalData } from "./orbitaldata";


export class NearEarthObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=absolute_magnitude_h" })
  absoluteMagnitudeH?: number;

  @Metadata({ data: "json, name=close_approach_data", elemType: shared.CloseApproachData })
  closeApproachData?: CloseApproachData[];

  @Metadata({ data: "json, name=designation" })
  designation?: string;

  @Metadata({ data: "json, name=estimated_diameter" })
  estimatedDiameter?: EstimatedDiameterContainer;

  @Metadata({ data: "json, name=is_potentially_hazardous_asteroid" })
  isPotentiallyHazardousAsteroid?: boolean;

  @Metadata({ data: "json, name=is_sentry_object" })
  isSentryObject?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=name_limited" })
  nameLimited?: string;

  @Metadata({ data: "json, name=nasa_jpl_url" })
  nasaJplUrl?: string;

  @Metadata({ data: "json, name=neo_reference_id" })
  neoReferenceId?: string;

  @Metadata({ data: "json, name=orbital_data" })
  orbitalData?: OrbitalData;

  @Metadata({ data: "json, name=sentry_data" })
  sentryData?: string;
}

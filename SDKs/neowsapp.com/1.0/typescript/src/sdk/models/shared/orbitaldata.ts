import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrbitClass } from "./orbitclass";



export class OrbitalData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aphelion_distance" })
  aphelionDistance?: string;

  @SpeakeasyMetadata({ data: "json, name=ascending_node_longitude" })
  ascendingNodeLongitude?: string;

  @SpeakeasyMetadata({ data: "json, name=data_arc_in_days" })
  dataArcInDays?: number;

  @SpeakeasyMetadata({ data: "json, name=eccentricity" })
  eccentricity?: string;

  @SpeakeasyMetadata({ data: "json, name=epoch_osculation" })
  epochOsculation?: string;

  @SpeakeasyMetadata({ data: "json, name=equinox" })
  equinox?: string;

  @SpeakeasyMetadata({ data: "json, name=first_observation_date" })
  firstObservationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=inclination" })
  inclination?: string;

  @SpeakeasyMetadata({ data: "json, name=jupiter_tisserand_invariant" })
  jupiterTisserandInvariant?: string;

  @SpeakeasyMetadata({ data: "json, name=last_observation_date" })
  lastObservationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=mean_anomaly" })
  meanAnomaly?: string;

  @SpeakeasyMetadata({ data: "json, name=mean_motion" })
  meanMotion?: string;

  @SpeakeasyMetadata({ data: "json, name=minimum_orbit_intersection" })
  minimumOrbitIntersection?: string;

  @SpeakeasyMetadata({ data: "json, name=observations_used" })
  observationsUsed?: number;

  @SpeakeasyMetadata({ data: "json, name=orbit_class" })
  orbitClass?: OrbitClass;

  @SpeakeasyMetadata({ data: "json, name=orbit_determination_date" })
  orbitDeterminationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=orbit_id" })
  orbitId?: string;

  @SpeakeasyMetadata({ data: "json, name=orbit_uncertainty" })
  orbitUncertainty?: string;

  @SpeakeasyMetadata({ data: "json, name=orbital_period" })
  orbitalPeriod?: string;

  @SpeakeasyMetadata({ data: "json, name=perihelion_argument" })
  perihelionArgument?: string;

  @SpeakeasyMetadata({ data: "json, name=perihelion_distance" })
  perihelionDistance?: string;

  @SpeakeasyMetadata({ data: "json, name=perihelion_time" })
  perihelionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=semi_major_axis" })
  semiMajorAxis?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrbitClass } from "./orbitclass";


export class OrbitalData extends SpeakeasyBase {
  @Metadata({ data: "json, name=aphelion_distance" })
  aphelionDistance?: string;

  @Metadata({ data: "json, name=ascending_node_longitude" })
  ascendingNodeLongitude?: string;

  @Metadata({ data: "json, name=data_arc_in_days" })
  dataArcInDays?: number;

  @Metadata({ data: "json, name=eccentricity" })
  eccentricity?: string;

  @Metadata({ data: "json, name=epoch_osculation" })
  epochOsculation?: string;

  @Metadata({ data: "json, name=equinox" })
  equinox?: string;

  @Metadata({ data: "json, name=first_observation_date" })
  firstObservationDate?: string;

  @Metadata({ data: "json, name=inclination" })
  inclination?: string;

  @Metadata({ data: "json, name=jupiter_tisserand_invariant" })
  jupiterTisserandInvariant?: string;

  @Metadata({ data: "json, name=last_observation_date" })
  lastObservationDate?: string;

  @Metadata({ data: "json, name=mean_anomaly" })
  meanAnomaly?: string;

  @Metadata({ data: "json, name=mean_motion" })
  meanMotion?: string;

  @Metadata({ data: "json, name=minimum_orbit_intersection" })
  minimumOrbitIntersection?: string;

  @Metadata({ data: "json, name=observations_used" })
  observationsUsed?: number;

  @Metadata({ data: "json, name=orbit_class" })
  orbitClass?: OrbitClass;

  @Metadata({ data: "json, name=orbit_determination_date" })
  orbitDeterminationDate?: string;

  @Metadata({ data: "json, name=orbit_id" })
  orbitId?: string;

  @Metadata({ data: "json, name=orbit_uncertainty" })
  orbitUncertainty?: string;

  @Metadata({ data: "json, name=orbital_period" })
  orbitalPeriod?: string;

  @Metadata({ data: "json, name=perihelion_argument" })
  perihelionArgument?: string;

  @Metadata({ data: "json, name=perihelion_distance" })
  perihelionDistance?: string;

  @Metadata({ data: "json, name=perihelion_time" })
  perihelionTime?: string;

  @Metadata({ data: "json, name=semi_major_axis" })
  semiMajorAxis?: string;
}

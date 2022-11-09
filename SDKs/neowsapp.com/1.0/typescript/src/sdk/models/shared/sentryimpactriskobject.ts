import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SentryImpactRiskObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=Palermo_scale_max" })
  palermoScaleMax?: string;

  @Metadata({ data: "json, name=absolute_magnitude" })
  absoluteMagnitude?: string;

  @Metadata({ data: "json, name=average_lunar_distance" })
  averageLunarDistance?: number;

  @Metadata({ data: "json, name=designation" })
  designation?: string;

  @Metadata({ data: "json, name=estimated_diameter" })
  estimatedDiameter?: string;

  @Metadata({ data: "json, name=fullname" })
  fullname?: string;

  @Metadata({ data: "json, name=impact_probability" })
  impactProbability?: string;

  @Metadata({ data: "json, name=is_active_sentry_object" })
  isActiveSentryObject?: boolean;

  @Metadata({ data: "json, name=last_obs" })
  lastObs?: string;

  @Metadata({ data: "json, name=last_obs_jd" })
  lastObsJd?: string;

  @Metadata({ data: "json, name=palermo_scale_ave" })
  palermoScaleAve?: string;

  @Metadata({ data: "json, name=potential_impacts" })
  potentialImpacts?: string;

  @Metadata({ data: "json, name=removal_date" })
  removalDate?: string;

  @Metadata({ data: "json, name=sentryId" })
  sentryId?: string;

  @Metadata({ data: "json, name=torino_scale" })
  torinoScale?: string;

  @Metadata({ data: "json, name=v_infinity" })
  vInfinity?: string;

  @Metadata({ data: "json, name=year_range_max" })
  yearRangeMax?: string;

  @Metadata({ data: "json, name=year_range_min" })
  yearRangeMin?: string;
}

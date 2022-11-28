import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SentryImpactRiskObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Palermo_scale_max" })
  palermoScaleMax?: string;

  @SpeakeasyMetadata({ data: "json, name=absolute_magnitude" })
  absoluteMagnitude?: string;

  @SpeakeasyMetadata({ data: "json, name=average_lunar_distance" })
  averageLunarDistance?: number;

  @SpeakeasyMetadata({ data: "json, name=designation" })
  designation?: string;

  @SpeakeasyMetadata({ data: "json, name=estimated_diameter" })
  estimatedDiameter?: string;

  @SpeakeasyMetadata({ data: "json, name=fullname" })
  fullname?: string;

  @SpeakeasyMetadata({ data: "json, name=impact_probability" })
  impactProbability?: string;

  @SpeakeasyMetadata({ data: "json, name=is_active_sentry_object" })
  isActiveSentryObject?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_obs" })
  lastObs?: string;

  @SpeakeasyMetadata({ data: "json, name=last_obs_jd" })
  lastObsJd?: string;

  @SpeakeasyMetadata({ data: "json, name=palermo_scale_ave" })
  palermoScaleAve?: string;

  @SpeakeasyMetadata({ data: "json, name=potential_impacts" })
  potentialImpacts?: string;

  @SpeakeasyMetadata({ data: "json, name=removal_date" })
  removalDate?: string;

  @SpeakeasyMetadata({ data: "json, name=sentryId" })
  sentryId?: string;

  @SpeakeasyMetadata({ data: "json, name=torino_scale" })
  torinoScale?: string;

  @SpeakeasyMetadata({ data: "json, name=v_infinity" })
  vInfinity?: string;

  @SpeakeasyMetadata({ data: "json, name=year_range_max" })
  yearRangeMax?: string;

  @SpeakeasyMetadata({ data: "json, name=year_range_min" })
  yearRangeMin?: string;
}

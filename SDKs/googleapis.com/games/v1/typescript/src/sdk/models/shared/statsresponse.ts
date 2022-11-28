import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StatsResponse
/** 
 * A third party stats resource.
**/
export class StatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_session_length_minutes" })
  avgSessionLengthMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=churn_probability" })
  churnProbability?: number;

  @SpeakeasyMetadata({ data: "json, name=days_since_last_played" })
  daysSinceLastPlayed?: number;

  @SpeakeasyMetadata({ data: "json, name=high_spender_probability" })
  highSpenderProbability?: number;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=num_purchases" })
  numPurchases?: number;

  @SpeakeasyMetadata({ data: "json, name=num_sessions" })
  numSessions?: number;

  @SpeakeasyMetadata({ data: "json, name=num_sessions_percentile" })
  numSessionsPercentile?: number;

  @SpeakeasyMetadata({ data: "json, name=spend_percentile" })
  spendPercentile?: number;

  @SpeakeasyMetadata({ data: "json, name=spend_probability" })
  spendProbability?: number;

  @SpeakeasyMetadata({ data: "json, name=total_spend_next_28_days" })
  totalSpendNext28Days?: number;
}

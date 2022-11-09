import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StatsResponse
/** 
 * A third party stats resource.
**/
export class StatsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=avg_session_length_minutes" })
  avgSessionLengthMinutes?: number;

  @Metadata({ data: "json, name=churn_probability" })
  churnProbability?: number;

  @Metadata({ data: "json, name=days_since_last_played" })
  daysSinceLastPlayed?: number;

  @Metadata({ data: "json, name=high_spender_probability" })
  highSpenderProbability?: number;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=num_purchases" })
  numPurchases?: number;

  @Metadata({ data: "json, name=num_sessions" })
  numSessions?: number;

  @Metadata({ data: "json, name=num_sessions_percentile" })
  numSessionsPercentile?: number;

  @Metadata({ data: "json, name=spend_percentile" })
  spendPercentile?: number;

  @Metadata({ data: "json, name=spend_probability" })
  spendProbability?: number;

  @Metadata({ data: "json, name=total_spend_next_28_days" })
  totalSpendNext28Days?: number;
}

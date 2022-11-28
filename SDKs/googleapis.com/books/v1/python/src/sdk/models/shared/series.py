from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo:
    amount_in_micros: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountInMicros') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    release_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseNumber') }})
    release_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseTime') }})
    

@dataclass_json
@dataclass
class SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo:
    amount_in_micros: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountInMicros') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    release_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseNumber') }})
    release_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('releaseTime') }})
    

@dataclass_json
@dataclass
class SeriesSeriesSeriesSubscriptionReleaseInfo:
    cancel_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelTime') }})
    current_release_info: Optional[SeriesSeriesSeriesSubscriptionReleaseInfoCurrentReleaseInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentReleaseInfo') }})
    next_release_info: Optional[SeriesSeriesSeriesSubscriptionReleaseInfoNextReleaseInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextReleaseInfo') }})
    series_subscription_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesSubscriptionType') }})
    

@dataclass_json
@dataclass
class SeriesSeries:
    banner_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bannerImageUrl') }})
    eligible_for_subscription: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eligibleForSubscription') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUrl') }})
    is_complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isComplete') }})
    series_format_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesFormatType') }})
    series_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesId') }})
    series_subscription_release_info: Optional[SeriesSeriesSeriesSubscriptionReleaseInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesSubscriptionReleaseInfo') }})
    series_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seriesType') }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    

@dataclass_json
@dataclass
class Series:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    series: Optional[List[SeriesSeries]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('series') }})
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Campaign:
    r"""Campaign
    Contains properties of a Campaign Manager campaign.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    ad_blocking_configuration: Optional[AdBlockingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adBlockingConfiguration') }})
    additional_creative_optimization_configurations: Optional[List[CreativeOptimizationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalCreativeOptimizationConfigurations') }})
    advertiser_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserGroupId') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    advertiser_id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserIdDimensionValue') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    audience_segment_groups: Optional[List[AudienceSegmentGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceSegmentGroups') }})
    billing_invoice_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingInvoiceCode') }})
    click_through_url_suffix_properties: Optional[ClickThroughURLSuffixProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickThroughUrlSuffixProperties') }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    create_info: Optional[LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createInfo') }})
    creative_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeGroupIds') }})
    creative_optimization_configuration: Optional[CreativeOptimizationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeOptimizationConfiguration') }})
    default_click_through_event_tag_properties: Optional[DefaultClickThroughEventTagProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultClickThroughEventTagProperties') }})
    default_landing_page_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultLandingPageId') }})
    end_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_tag_overrides: Optional[List[EventTagOverride]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTagOverrides') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    id_dimension_value: Optional[DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idDimensionValue') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    last_modified_info: Optional[LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedInfo') }})
    measurement_partner_link: Optional[MeasurementPartnerCampaignLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('measurementPartnerLink') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    start_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subaccountId') }})
    

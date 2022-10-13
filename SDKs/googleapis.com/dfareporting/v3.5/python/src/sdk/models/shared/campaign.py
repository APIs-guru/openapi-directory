from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adblockingconfiguration
from . import creativeoptimizationconfiguration
from . import dimensionvalue
from . import audiencesegmentgroup
from . import clickthroughurlsuffixproperties
from . import lastmodifiedinfo
from . import creativeoptimizationconfiguration
from . import defaultclickthrougheventtagproperties
from . import eventtagoverride
from . import dimensionvalue
from . import lastmodifiedinfo
from . import measurementpartnercampaignlink


@dataclass_json
@dataclass
class Campaign:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    ad_blocking_configuration: Optional[adblockingconfiguration.AdBlockingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adBlockingConfiguration' }})
    additional_creative_optimization_configurations: Optional[List[creativeoptimizationconfiguration.CreativeOptimizationConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalCreativeOptimizationConfigurations' }})
    advertiser_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserGroupId' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    advertiser_id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserIdDimensionValue' }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived' }})
    audience_segment_groups: Optional[List[audiencesegmentgroup.AudienceSegmentGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audienceSegmentGroups' }})
    billing_invoice_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingInvoiceCode' }})
    click_through_url_suffix_properties: Optional[clickthroughurlsuffixproperties.ClickThroughURLSuffixProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickThroughUrlSuffixProperties' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    create_info: Optional[lastmodifiedinfo.LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createInfo' }})
    creative_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeGroupIds' }})
    creative_optimization_configuration: Optional[creativeoptimizationconfiguration.CreativeOptimizationConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeOptimizationConfiguration' }})
    default_click_through_event_tag_properties: Optional[defaultclickthrougheventtagproperties.DefaultClickThroughEventTagProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultClickThroughEventTagProperties' }})
    default_landing_page_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLandingPageId' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_tag_overrides: Optional[List[eventtagoverride.EventTagOverride]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTagOverrides' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    id_dimension_value: Optional[dimensionvalue.DimensionValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idDimensionValue' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    last_modified_info: Optional[lastmodifiedinfo.LastModifiedInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedInfo' }})
    measurement_partner_link: Optional[measurementpartnercampaignlink.MeasurementPartnerCampaignLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'measurementPartnerLink' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nielsen_ocr_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nielsenOcrEnabled' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subaccount_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccountId' }})
    trafficker_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traffickerEmails' }})
    

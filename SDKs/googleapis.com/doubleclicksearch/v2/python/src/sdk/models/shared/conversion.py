from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import customdimension
from . import custommetric


@dataclass_json
@dataclass
class Conversion:
    ad_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adGroupId' }})
    ad_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adId' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    agency_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agencyId' }})
    attribution_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributionModel' }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignId' }})
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    click_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickId' }})
    conversion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversionId' }})
    conversion_modified_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversionModifiedTimestamp' }})
    conversion_timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversionTimestamp' }})
    count_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countMillis' }})
    criterion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criterionId' }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currencyCode' }})
    custom_dimension: Optional[List[customdimension.CustomDimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customDimension' }})
    custom_metric: Optional[List[custommetric.CustomMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customMetric' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceType' }})
    ds_conversion_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dsConversionId' }})
    engine_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engineAccountId' }})
    floodlight_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floodlightOrderId' }})
    inventory_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryAccountId' }})
    product_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productCountry' }})
    product_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productGroupId' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productId' }})
    product_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productLanguage' }})
    quantity_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantityMillis' }})
    revenue_micros: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revenueMicros' }})
    segmentation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentationId' }})
    segmentation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentationName' }})
    segmentation_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentationType' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'storeId' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import productaspect
from . import price
from . import customattribute
from . import customgroup
from . import productdestination
from . import installment
from . import loyaltypoints
from . import price
from . import price
from . import productshipping
from . import productshippingdimension
from . import productshippingdimension
from . import productshippingweight
from . import productshippingdimension
from . import producttax
from . import productunitpricingbasemeasure
from . import productunitpricingmeasure
from . import error


@dataclass_json
@dataclass
class Product:
    additional_image_links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalImageLinks' }})
    additional_product_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalProductTypes' }})
    adult: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adult' }})
    adwords_grouping: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adwordsGrouping' }})
    adwords_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adwordsLabels' }})
    adwords_redirect: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adwordsRedirect' }})
    age_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageGroup' }})
    aspects: Optional[List[productaspect.ProductAspect]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aspects' }})
    availability: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    availability_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityDate' }})
    brand: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    canonical_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canonicalLink' }})
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    content_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentLanguage' }})
    cost_of_goods_sold: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costOfGoodsSold' }})
    custom_attributes: Optional[List[customattribute.CustomAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customAttributes' }})
    custom_groups: Optional[List[customgroup.CustomGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customGroups' }})
    custom_label0: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel0' }})
    custom_label1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel1' }})
    custom_label2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel2' }})
    custom_label3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel3' }})
    custom_label4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel4' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    destinations: Optional[List[productdestination.ProductDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    display_ads_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayAdsId' }})
    display_ads_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayAdsLink' }})
    display_ads_similar_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayAdsSimilarIds' }})
    display_ads_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayAdsTitle' }})
    display_ads_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayAdsValue' }})
    energy_efficiency_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energyEfficiencyClass' }})
    expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    google_product_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleProductCategory' }})
    gtin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gtin' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identifier_exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifierExists' }})
    image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageLink' }})
    installment: Optional[installment.Installment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installment' }})
    is_bundle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isBundle' }})
    item_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemGroupId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    loyalty_points: Optional[loyaltypoints.LoyaltyPoints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyaltyPoints' }})
    material: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'material' }})
    max_energy_efficiency_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxEnergyEfficiencyClass' }})
    max_handling_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxHandlingTime' }})
    min_energy_efficiency_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minEnergyEfficiencyClass' }})
    min_handling_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minHandlingTime' }})
    mobile_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileLink' }})
    mpn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mpn' }})
    multipack: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multipack' }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerId' }})
    online_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'onlineOnly' }})
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pattern' }})
    price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productType' }})
    promotion_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotionIds' }})
    sale_price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salePrice' }})
    sale_price_effective_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'salePriceEffectiveDate' }})
    sell_on_google_quantity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sellOnGoogleQuantity' }})
    shipping: Optional[List[productshipping.ProductShipping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping' }})
    shipping_height: Optional[productshippingdimension.ProductShippingDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingHeight' }})
    shipping_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingLabel' }})
    shipping_length: Optional[productshippingdimension.ProductShippingDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingLength' }})
    shipping_weight: Optional[productshippingweight.ProductShippingWeight] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingWeight' }})
    shipping_width: Optional[productshippingdimension.ProductShippingDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingWidth' }})
    size_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeSystem' }})
    size_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeType' }})
    sizes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    target_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCountry' }})
    taxes: Optional[List[producttax.ProductTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxes' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    unit_pricing_base_measure: Optional[productunitpricingbasemeasure.ProductUnitPricingBaseMeasure] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitPricingBaseMeasure' }})
    unit_pricing_measure: Optional[productunitpricingmeasure.ProductUnitPricingMeasure] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitPricingMeasure' }})
    validated_destinations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validatedDestinations' }})
    warnings: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    

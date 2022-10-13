from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import price
from . import customattribute
from . import installment
from . import loyaltypoints
from . import price
from . import productproductdetail
from . import productdimension
from . import productdimension
from . import productweight
from . import productdimension
from . import price
from . import productshipping
from . import productshippingdimension
from . import productshippingdimension
from . import productshippingweight
from . import productshippingdimension
from . import productsubscriptioncost
from . import producttax
from . import productunitpricingbasemeasure
from . import productunitpricingmeasure


@dataclass_json
@dataclass
class Product:
    additional_image_links: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalImageLinks' }})
    additional_size_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalSizeType' }})
    ads_grouping: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adsGrouping' }})
    ads_labels: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adsLabels' }})
    ads_redirect: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adsRedirect' }})
    adult: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adult' }})
    age_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageGroup' }})
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
    custom_label0: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel0' }})
    custom_label1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel1' }})
    custom_label2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel2' }})
    custom_label3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel3' }})
    custom_label4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customLabel4' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_ads_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayAdsId' }})
    display_ads_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayAdsLink' }})
    display_ads_similar_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayAdsSimilarIds' }})
    display_ads_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayAdsTitle' }})
    display_ads_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayAdsValue' }})
    energy_efficiency_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energyEfficiencyClass' }})
    excluded_destinations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedDestinations' }})
    expiration_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate' }})
    external_seller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalSellerId' }})
    feed_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedLabel' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    google_product_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleProductCategory' }})
    gtin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gtin' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identifier_exists: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifierExists' }})
    image_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageLink' }})
    included_destinations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedDestinations' }})
    installment: Optional[installment.Installment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installment' }})
    is_bundle: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isBundle' }})
    item_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemGroupId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    link_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkTemplate' }})
    loyalty_points: Optional[loyaltypoints.LoyaltyPoints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyaltyPoints' }})
    material: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'material' }})
    max_energy_efficiency_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxEnergyEfficiencyClass' }})
    max_handling_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxHandlingTime' }})
    min_energy_efficiency_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minEnergyEfficiencyClass' }})
    min_handling_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minHandlingTime' }})
    mobile_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileLink' }})
    mobile_link_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileLinkTemplate' }})
    mpn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mpn' }})
    multipack: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multipack' }})
    offer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offerId' }})
    pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pattern' }})
    pause: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pause' }})
    pickup_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupMethod' }})
    pickup_sla: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupSla' }})
    price: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    product_details: Optional[List[productproductdetail.ProductProductDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productDetails' }})
    product_height: Optional[productdimension.ProductDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productHeight' }})
    product_highlights: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productHighlights' }})
    product_length: Optional[productdimension.ProductDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productLength' }})
    product_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTypes' }})
    product_weight: Optional[productweight.ProductWeight] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productWeight' }})
    product_width: Optional[productdimension.ProductDimension] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productWidth' }})
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
    shopping_ads_excluded_countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shoppingAdsExcludedCountries' }})
    size_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeSystem' }})
    size_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeType' }})
    sizes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizes' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    subscription_cost: Optional[productsubscriptioncost.ProductSubscriptionCost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionCost' }})
    target_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetCountry' }})
    tax_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxCategory' }})
    taxes: Optional[List[producttax.ProductTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxes' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    transit_time_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transitTimeLabel' }})
    unit_pricing_base_measure: Optional[productunitpricingbasemeasure.ProductUnitPricingBaseMeasure] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitPricingBaseMeasure' }})
    unit_pricing_measure: Optional[productunitpricingmeasure.ProductUnitPricingMeasure] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unitPricingMeasure' }})
    

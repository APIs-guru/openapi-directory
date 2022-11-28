import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Price } from "./price";
import { CustomAttribute } from "./customattribute";
import { Installment } from "./installment";
import { LoyaltyPoints } from "./loyaltypoints";
import { ProductProductDetail } from "./productproductdetail";
import { ProductDimension } from "./productdimension";
import { ProductWeight } from "./productweight";
import { ProductShipping } from "./productshipping";
import { ProductShippingDimension } from "./productshippingdimension";
import { ProductShippingWeight } from "./productshippingweight";
import { ProductSubscriptionCost } from "./productsubscriptioncost";
import { ProductTax } from "./producttax";
import { ProductUnitPricingBaseMeasure } from "./productunitpricingbasemeasure";
import { ProductUnitPricingMeasure } from "./productunitpricingmeasure";



// Product
/** 
 *  Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
**/
export class Product extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalImageLinks" })
  additionalImageLinks?: string[];

  @SpeakeasyMetadata({ data: "json, name=additionalSizeType" })
  additionalSizeType?: string;

  @SpeakeasyMetadata({ data: "json, name=adsGrouping" })
  adsGrouping?: string;

  @SpeakeasyMetadata({ data: "json, name=adsLabels" })
  adsLabels?: string[];

  @SpeakeasyMetadata({ data: "json, name=adsRedirect" })
  adsRedirect?: string;

  @SpeakeasyMetadata({ data: "json, name=adult" })
  adult?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ageGroup" })
  ageGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: string;

  @SpeakeasyMetadata({ data: "json, name=availabilityDate" })
  availabilityDate?: string;

  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=canonicalLink" })
  canonicalLink?: string;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=costOfGoodsSold" })
  costOfGoodsSold?: Price;

  @SpeakeasyMetadata({ data: "json, name=customAttributes", elemType: CustomAttribute })
  customAttributes?: CustomAttribute[];

  @SpeakeasyMetadata({ data: "json, name=customLabel0" })
  customLabel0?: string;

  @SpeakeasyMetadata({ data: "json, name=customLabel1" })
  customLabel1?: string;

  @SpeakeasyMetadata({ data: "json, name=customLabel2" })
  customLabel2?: string;

  @SpeakeasyMetadata({ data: "json, name=customLabel3" })
  customLabel3?: string;

  @SpeakeasyMetadata({ data: "json, name=customLabel4" })
  customLabel4?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayAdsId" })
  displayAdsId?: string;

  @SpeakeasyMetadata({ data: "json, name=displayAdsLink" })
  displayAdsLink?: string;

  @SpeakeasyMetadata({ data: "json, name=displayAdsSimilarIds" })
  displayAdsSimilarIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayAdsTitle" })
  displayAdsTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=displayAdsValue" })
  displayAdsValue?: number;

  @SpeakeasyMetadata({ data: "json, name=energyEfficiencyClass" })
  energyEfficiencyClass?: string;

  @SpeakeasyMetadata({ data: "json, name=excludedDestinations" })
  excludedDestinations?: string[];

  @SpeakeasyMetadata({ data: "json, name=expirationDate" })
  expirationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=externalSellerId" })
  externalSellerId?: string;

  @SpeakeasyMetadata({ data: "json, name=feedLabel" })
  feedLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=googleProductCategory" })
  googleProductCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=gtin" })
  gtin?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=identifierExists" })
  identifierExists?: boolean;

  @SpeakeasyMetadata({ data: "json, name=imageLink" })
  imageLink?: string;

  @SpeakeasyMetadata({ data: "json, name=includedDestinations" })
  includedDestinations?: string[];

  @SpeakeasyMetadata({ data: "json, name=installment" })
  installment?: Installment;

  @SpeakeasyMetadata({ data: "json, name=isBundle" })
  isBundle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=linkTemplate" })
  linkTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=loyaltyPoints" })
  loyaltyPoints?: LoyaltyPoints;

  @SpeakeasyMetadata({ data: "json, name=material" })
  material?: string;

  @SpeakeasyMetadata({ data: "json, name=maxEnergyEfficiencyClass" })
  maxEnergyEfficiencyClass?: string;

  @SpeakeasyMetadata({ data: "json, name=maxHandlingTime" })
  maxHandlingTime?: string;

  @SpeakeasyMetadata({ data: "json, name=minEnergyEfficiencyClass" })
  minEnergyEfficiencyClass?: string;

  @SpeakeasyMetadata({ data: "json, name=minHandlingTime" })
  minHandlingTime?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileLink" })
  mobileLink?: string;

  @SpeakeasyMetadata({ data: "json, name=mobileLinkTemplate" })
  mobileLinkTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=mpn" })
  mpn?: string;

  @SpeakeasyMetadata({ data: "json, name=multipack" })
  multipack?: string;

  @SpeakeasyMetadata({ data: "json, name=offerId" })
  offerId?: string;

  @SpeakeasyMetadata({ data: "json, name=pattern" })
  pattern?: string;

  @SpeakeasyMetadata({ data: "json, name=pause" })
  pause?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupMethod" })
  pickupMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupSla" })
  pickupSla?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Price;

  @SpeakeasyMetadata({ data: "json, name=productDetails", elemType: ProductProductDetail })
  productDetails?: ProductProductDetail[];

  @SpeakeasyMetadata({ data: "json, name=productHeight" })
  productHeight?: ProductDimension;

  @SpeakeasyMetadata({ data: "json, name=productHighlights" })
  productHighlights?: string[];

  @SpeakeasyMetadata({ data: "json, name=productLength" })
  productLength?: ProductDimension;

  @SpeakeasyMetadata({ data: "json, name=productTypes" })
  productTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=productWeight" })
  productWeight?: ProductWeight;

  @SpeakeasyMetadata({ data: "json, name=productWidth" })
  productWidth?: ProductDimension;

  @SpeakeasyMetadata({ data: "json, name=promotionIds" })
  promotionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=salePrice" })
  salePrice?: Price;

  @SpeakeasyMetadata({ data: "json, name=salePriceEffectiveDate" })
  salePriceEffectiveDate?: string;

  @SpeakeasyMetadata({ data: "json, name=sellOnGoogleQuantity" })
  sellOnGoogleQuantity?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping", elemType: ProductShipping })
  shipping?: ProductShipping[];

  @SpeakeasyMetadata({ data: "json, name=shippingHeight" })
  shippingHeight?: ProductShippingDimension;

  @SpeakeasyMetadata({ data: "json, name=shippingLabel" })
  shippingLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=shippingLength" })
  shippingLength?: ProductShippingDimension;

  @SpeakeasyMetadata({ data: "json, name=shippingWeight" })
  shippingWeight?: ProductShippingWeight;

  @SpeakeasyMetadata({ data: "json, name=shippingWidth" })
  shippingWidth?: ProductShippingDimension;

  @SpeakeasyMetadata({ data: "json, name=shoppingAdsExcludedCountries" })
  shoppingAdsExcludedCountries?: string[];

  @SpeakeasyMetadata({ data: "json, name=sizeSystem" })
  sizeSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=sizeType" })
  sizeType?: string;

  @SpeakeasyMetadata({ data: "json, name=sizes" })
  sizes?: string[];

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=subscriptionCost" })
  subscriptionCost?: ProductSubscriptionCost;

  @SpeakeasyMetadata({ data: "json, name=targetCountry" })
  targetCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=taxCategory" })
  taxCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=taxes", elemType: ProductTax })
  taxes?: ProductTax[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=transitTimeLabel" })
  transitTimeLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=unitPricingBaseMeasure" })
  unitPricingBaseMeasure?: ProductUnitPricingBaseMeasure;

  @SpeakeasyMetadata({ data: "json, name=unitPricingMeasure" })
  unitPricingMeasure?: ProductUnitPricingMeasure;
}

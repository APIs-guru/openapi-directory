import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Price } from "./price";
import { CustomAttribute } from "./customattribute";
import { Installment } from "./installment";
import { LoyaltyPoints } from "./loyaltypoints";
import { Price } from "./price";
import { ProductProductDetail } from "./productproductdetail";
import { ProductDimension } from "./productdimension";
import { ProductDimension } from "./productdimension";
import { ProductWeight } from "./productweight";
import { ProductDimension } from "./productdimension";
import { Price } from "./price";
import { ProductShipping } from "./productshipping";
import { ProductShippingDimension } from "./productshippingdimension";
import { ProductShippingDimension } from "./productshippingdimension";
import { ProductShippingWeight } from "./productshippingweight";
import { ProductShippingDimension } from "./productshippingdimension";
import { ProductSubscriptionCost } from "./productsubscriptioncost";
import { ProductTax } from "./producttax";
import { ProductUnitPricingBaseMeasure } from "./productunitpricingbasemeasure";
import { ProductUnitPricingMeasure } from "./productunitpricingmeasure";


// Product
/** 
 *  Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
**/
export class Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalImageLinks" })
  additionalImageLinks?: string[];

  @Metadata({ data: "json, name=additionalSizeType" })
  additionalSizeType?: string;

  @Metadata({ data: "json, name=adsGrouping" })
  adsGrouping?: string;

  @Metadata({ data: "json, name=adsLabels" })
  adsLabels?: string[];

  @Metadata({ data: "json, name=adsRedirect" })
  adsRedirect?: string;

  @Metadata({ data: "json, name=adult" })
  adult?: boolean;

  @Metadata({ data: "json, name=ageGroup" })
  ageGroup?: string;

  @Metadata({ data: "json, name=availability" })
  availability?: string;

  @Metadata({ data: "json, name=availabilityDate" })
  availabilityDate?: string;

  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=canonicalLink" })
  canonicalLink?: string;

  @Metadata({ data: "json, name=channel" })
  channel?: string;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=contentLanguage" })
  contentLanguage?: string;

  @Metadata({ data: "json, name=costOfGoodsSold" })
  costOfGoodsSold?: Price;

  @Metadata({ data: "json, name=customAttributes", elemType: shared.CustomAttribute })
  customAttributes?: CustomAttribute[];

  @Metadata({ data: "json, name=customLabel0" })
  customLabel0?: string;

  @Metadata({ data: "json, name=customLabel1" })
  customLabel1?: string;

  @Metadata({ data: "json, name=customLabel2" })
  customLabel2?: string;

  @Metadata({ data: "json, name=customLabel3" })
  customLabel3?: string;

  @Metadata({ data: "json, name=customLabel4" })
  customLabel4?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayAdsId" })
  displayAdsId?: string;

  @Metadata({ data: "json, name=displayAdsLink" })
  displayAdsLink?: string;

  @Metadata({ data: "json, name=displayAdsSimilarIds" })
  displayAdsSimilarIds?: string[];

  @Metadata({ data: "json, name=displayAdsTitle" })
  displayAdsTitle?: string;

  @Metadata({ data: "json, name=displayAdsValue" })
  displayAdsValue?: number;

  @Metadata({ data: "json, name=energyEfficiencyClass" })
  energyEfficiencyClass?: string;

  @Metadata({ data: "json, name=excludedDestinations" })
  excludedDestinations?: string[];

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: string;

  @Metadata({ data: "json, name=externalSellerId" })
  externalSellerId?: string;

  @Metadata({ data: "json, name=feedLabel" })
  feedLabel?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=googleProductCategory" })
  googleProductCategory?: string;

  @Metadata({ data: "json, name=gtin" })
  gtin?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=identifierExists" })
  identifierExists?: boolean;

  @Metadata({ data: "json, name=imageLink" })
  imageLink?: string;

  @Metadata({ data: "json, name=includedDestinations" })
  includedDestinations?: string[];

  @Metadata({ data: "json, name=installment" })
  installment?: Installment;

  @Metadata({ data: "json, name=isBundle" })
  isBundle?: boolean;

  @Metadata({ data: "json, name=itemGroupId" })
  itemGroupId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=linkTemplate" })
  linkTemplate?: string;

  @Metadata({ data: "json, name=loyaltyPoints" })
  loyaltyPoints?: LoyaltyPoints;

  @Metadata({ data: "json, name=material" })
  material?: string;

  @Metadata({ data: "json, name=maxEnergyEfficiencyClass" })
  maxEnergyEfficiencyClass?: string;

  @Metadata({ data: "json, name=maxHandlingTime" })
  maxHandlingTime?: string;

  @Metadata({ data: "json, name=minEnergyEfficiencyClass" })
  minEnergyEfficiencyClass?: string;

  @Metadata({ data: "json, name=minHandlingTime" })
  minHandlingTime?: string;

  @Metadata({ data: "json, name=mobileLink" })
  mobileLink?: string;

  @Metadata({ data: "json, name=mobileLinkTemplate" })
  mobileLinkTemplate?: string;

  @Metadata({ data: "json, name=mpn" })
  mpn?: string;

  @Metadata({ data: "json, name=multipack" })
  multipack?: string;

  @Metadata({ data: "json, name=offerId" })
  offerId?: string;

  @Metadata({ data: "json, name=pattern" })
  pattern?: string;

  @Metadata({ data: "json, name=pause" })
  pause?: string;

  @Metadata({ data: "json, name=pickupMethod" })
  pickupMethod?: string;

  @Metadata({ data: "json, name=pickupSla" })
  pickupSla?: string;

  @Metadata({ data: "json, name=price" })
  price?: Price;

  @Metadata({ data: "json, name=productDetails", elemType: shared.ProductProductDetail })
  productDetails?: ProductProductDetail[];

  @Metadata({ data: "json, name=productHeight" })
  productHeight?: ProductDimension;

  @Metadata({ data: "json, name=productHighlights" })
  productHighlights?: string[];

  @Metadata({ data: "json, name=productLength" })
  productLength?: ProductDimension;

  @Metadata({ data: "json, name=productTypes" })
  productTypes?: string[];

  @Metadata({ data: "json, name=productWeight" })
  productWeight?: ProductWeight;

  @Metadata({ data: "json, name=productWidth" })
  productWidth?: ProductDimension;

  @Metadata({ data: "json, name=promotionIds" })
  promotionIds?: string[];

  @Metadata({ data: "json, name=salePrice" })
  salePrice?: Price;

  @Metadata({ data: "json, name=salePriceEffectiveDate" })
  salePriceEffectiveDate?: string;

  @Metadata({ data: "json, name=sellOnGoogleQuantity" })
  sellOnGoogleQuantity?: string;

  @Metadata({ data: "json, name=shipping", elemType: shared.ProductShipping })
  shipping?: ProductShipping[];

  @Metadata({ data: "json, name=shippingHeight" })
  shippingHeight?: ProductShippingDimension;

  @Metadata({ data: "json, name=shippingLabel" })
  shippingLabel?: string;

  @Metadata({ data: "json, name=shippingLength" })
  shippingLength?: ProductShippingDimension;

  @Metadata({ data: "json, name=shippingWeight" })
  shippingWeight?: ProductShippingWeight;

  @Metadata({ data: "json, name=shippingWidth" })
  shippingWidth?: ProductShippingDimension;

  @Metadata({ data: "json, name=shoppingAdsExcludedCountries" })
  shoppingAdsExcludedCountries?: string[];

  @Metadata({ data: "json, name=sizeSystem" })
  sizeSystem?: string;

  @Metadata({ data: "json, name=sizeType" })
  sizeType?: string;

  @Metadata({ data: "json, name=sizes" })
  sizes?: string[];

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=subscriptionCost" })
  subscriptionCost?: ProductSubscriptionCost;

  @Metadata({ data: "json, name=targetCountry" })
  targetCountry?: string;

  @Metadata({ data: "json, name=taxCategory" })
  taxCategory?: string;

  @Metadata({ data: "json, name=taxes", elemType: shared.ProductTax })
  taxes?: ProductTax[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=transitTimeLabel" })
  transitTimeLabel?: string;

  @Metadata({ data: "json, name=unitPricingBaseMeasure" })
  unitPricingBaseMeasure?: ProductUnitPricingBaseMeasure;

  @Metadata({ data: "json, name=unitPricingMeasure" })
  unitPricingMeasure?: ProductUnitPricingMeasure;
}

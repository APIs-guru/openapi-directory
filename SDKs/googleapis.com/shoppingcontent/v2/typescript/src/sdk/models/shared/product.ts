import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductAspect } from "./productaspect";
import { Price } from "./price";
import { CustomAttribute } from "./customattribute";
import { CustomGroup } from "./customgroup";
import { ProductDestination } from "./productdestination";
import { Installment } from "./installment";
import { LoyaltyPoints } from "./loyaltypoints";
import { Price } from "./price";
import { Price } from "./price";
import { ProductShipping } from "./productshipping";
import { ProductShippingDimension } from "./productshippingdimension";
import { ProductShippingDimension } from "./productshippingdimension";
import { ProductShippingWeight } from "./productshippingweight";
import { ProductShippingDimension } from "./productshippingdimension";
import { ProductTax } from "./producttax";
import { ProductUnitPricingBaseMeasure } from "./productunitpricingbasemeasure";
import { ProductUnitPricingMeasure } from "./productunitpricingmeasure";
import { Error } from "./error";


// Product
/** 
 *  Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
**/
export class Product extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalImageLinks" })
  additionalImageLinks?: string[];

  @Metadata({ data: "json, name=additionalProductTypes" })
  additionalProductTypes?: string[];

  @Metadata({ data: "json, name=adult" })
  adult?: boolean;

  @Metadata({ data: "json, name=adwordsGrouping" })
  adwordsGrouping?: string;

  @Metadata({ data: "json, name=adwordsLabels" })
  adwordsLabels?: string[];

  @Metadata({ data: "json, name=adwordsRedirect" })
  adwordsRedirect?: string;

  @Metadata({ data: "json, name=ageGroup" })
  ageGroup?: string;

  @Metadata({ data: "json, name=aspects", elemType: shared.ProductAspect })
  aspects?: ProductAspect[];

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

  @Metadata({ data: "json, name=customGroups", elemType: shared.CustomGroup })
  customGroups?: CustomGroup[];

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

  @Metadata({ data: "json, name=destinations", elemType: shared.ProductDestination })
  destinations?: ProductDestination[];

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

  @Metadata({ data: "json, name=expirationDate" })
  expirationDate?: string;

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

  @Metadata({ data: "json, name=mpn" })
  mpn?: string;

  @Metadata({ data: "json, name=multipack" })
  multipack?: string;

  @Metadata({ data: "json, name=offerId" })
  offerId?: string;

  @Metadata({ data: "json, name=onlineOnly" })
  onlineOnly?: boolean;

  @Metadata({ data: "json, name=pattern" })
  pattern?: string;

  @Metadata({ data: "json, name=price" })
  price?: Price;

  @Metadata({ data: "json, name=productType" })
  productType?: string;

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

  @Metadata({ data: "json, name=sizeSystem" })
  sizeSystem?: string;

  @Metadata({ data: "json, name=sizeType" })
  sizeType?: string;

  @Metadata({ data: "json, name=sizes" })
  sizes?: string[];

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=targetCountry" })
  targetCountry?: string;

  @Metadata({ data: "json, name=taxes", elemType: shared.ProductTax })
  taxes?: ProductTax[];

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=unitPricingBaseMeasure" })
  unitPricingBaseMeasure?: ProductUnitPricingBaseMeasure;

  @Metadata({ data: "json, name=unitPricingMeasure" })
  unitPricingMeasure?: ProductUnitPricingMeasure;

  @Metadata({ data: "json, name=validatedDestinations" })
  validatedDestinations?: string[];

  @Metadata({ data: "json, name=warnings", elemType: shared.Error })
  warnings?: Error[];
}

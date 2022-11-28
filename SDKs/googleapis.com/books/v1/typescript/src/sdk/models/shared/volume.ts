import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DownloadAccessRestriction } from "./downloadaccessrestriction";
import { ReadingPosition } from "./readingposition";
import { Review } from "./review";
import { Volumeseriesinfo } from "./volumeseriesinfo";



// VolumeAccessInfoEpub
/** 
 * Information about epub content. (In LITE projection.)
**/
export class VolumeAccessInfoEpub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acsTokenLink" })
  acsTokenLink?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadLink" })
  downloadLink?: string;

  @SpeakeasyMetadata({ data: "json, name=isAvailable" })
  isAvailable?: boolean;
}


// VolumeAccessInfoPdf
/** 
 * Information about pdf content. (In LITE projection.)
**/
export class VolumeAccessInfoPdf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acsTokenLink" })
  acsTokenLink?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadLink" })
  downloadLink?: string;

  @SpeakeasyMetadata({ data: "json, name=isAvailable" })
  isAvailable?: boolean;
}


// VolumeAccessInfo
/** 
 * Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
**/
export class VolumeAccessInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessViewStatus" })
  accessViewStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadAccess" })
  downloadAccess?: DownloadAccessRestriction;

  @SpeakeasyMetadata({ data: "json, name=driveImportedContentLink" })
  driveImportedContentLink?: string;

  @SpeakeasyMetadata({ data: "json, name=embeddable" })
  embeddable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=epub" })
  epub?: VolumeAccessInfoEpub;

  @SpeakeasyMetadata({ data: "json, name=explicitOfflineLicenseManagement" })
  explicitOfflineLicenseManagement?: boolean;

  @SpeakeasyMetadata({ data: "json, name=pdf" })
  pdf?: VolumeAccessInfoPdf;

  @SpeakeasyMetadata({ data: "json, name=publicDomain" })
  publicDomain?: boolean;

  @SpeakeasyMetadata({ data: "json, name=quoteSharingAllowed" })
  quoteSharingAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=textToSpeechPermission" })
  textToSpeechPermission?: string;

  @SpeakeasyMetadata({ data: "json, name=viewOrderUrl" })
  viewOrderUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=viewability" })
  viewability?: string;

  @SpeakeasyMetadata({ data: "json, name=webReaderLink" })
  webReaderLink?: string;
}


export class VolumeLayerInfoLayers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=layerId" })
  layerId?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeAnnotationsVersion" })
  volumeAnnotationsVersion?: string;
}


// VolumeLayerInfo
/** 
 * What layers exist in this volume and high level information about them.
**/
export class VolumeLayerInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=layers", elemType: VolumeLayerInfoLayers })
  layers?: VolumeLayerInfoLayers[];
}


// VolumeRecommendedInfo
/** 
 * Recommendation related information for this volume.
**/
export class VolumeRecommendedInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explanation" })
  explanation?: string;
}


// VolumeSaleInfoListPrice
/** 
 * Suggested retail price. (In LITE projection.)
**/
export class VolumeSaleInfoListPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;
}


// VolumeSaleInfoOffersListPrice
/** 
 * Offer list (=undiscounted) price in Micros.
**/
export class VolumeSaleInfoOffersListPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountInMicros" })
  amountInMicros?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;
}


// VolumeSaleInfoOffersRentalDuration
/** 
 * The rental duration (for rental offers only).
**/
export class VolumeSaleInfoOffersRentalDuration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;
}


// VolumeSaleInfoOffersRetailPrice
/** 
 * Offer retail (=discounted) price in Micros
**/
export class VolumeSaleInfoOffersRetailPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountInMicros" })
  amountInMicros?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;
}


export class VolumeSaleInfoOffers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finskyOfferType" })
  finskyOfferType?: number;

  @SpeakeasyMetadata({ data: "json, name=giftable" })
  giftable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=listPrice" })
  listPrice?: VolumeSaleInfoOffersListPrice;

  @SpeakeasyMetadata({ data: "json, name=rentalDuration" })
  rentalDuration?: VolumeSaleInfoOffersRentalDuration;

  @SpeakeasyMetadata({ data: "json, name=retailPrice" })
  retailPrice?: VolumeSaleInfoOffersRetailPrice;
}


// VolumeSaleInfoRetailPrice
/** 
 * The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.)
**/
export class VolumeSaleInfoRetailPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;
}


// VolumeSaleInfo
/** 
 * Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
**/
export class VolumeSaleInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buyLink" })
  buyLink?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=isEbook" })
  isEbook?: boolean;

  @SpeakeasyMetadata({ data: "json, name=listPrice" })
  listPrice?: VolumeSaleInfoListPrice;

  @SpeakeasyMetadata({ data: "json, name=offers", elemType: VolumeSaleInfoOffers })
  offers?: VolumeSaleInfoOffers[];

  @SpeakeasyMetadata({ data: "json, name=onSaleDate" })
  onSaleDate?: string;

  @SpeakeasyMetadata({ data: "json, name=retailPrice" })
  retailPrice?: VolumeSaleInfoRetailPrice;

  @SpeakeasyMetadata({ data: "json, name=saleability" })
  saleability?: string;
}


// VolumeSearchInfo
/** 
 * Search result information related to this volume.
**/
export class VolumeSearchInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=textSnippet" })
  textSnippet?: string;
}


// VolumeUserInfoCopy
/** 
 * Copy/Paste accounting information.
**/
export class VolumeUserInfoCopy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedCharacterCount" })
  allowedCharacterCount?: number;

  @SpeakeasyMetadata({ data: "json, name=limitType" })
  limitType?: string;

  @SpeakeasyMetadata({ data: "json, name=remainingCharacterCount" })
  remainingCharacterCount?: number;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;
}


// VolumeUserInfoFamilySharing
/** 
 * Information on the ability to share with the family.
**/
export class VolumeUserInfoFamilySharing extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=familyRole" })
  familyRole?: string;

  @SpeakeasyMetadata({ data: "json, name=isSharingAllowed" })
  isSharingAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isSharingDisabledByFop" })
  isSharingDisabledByFop?: boolean;
}


// VolumeUserInfoRentalPeriod
/** 
 * Period during this book is/was a valid rental.
**/
export class VolumeUserInfoRentalPeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endUtcSec" })
  endUtcSec?: string;

  @SpeakeasyMetadata({ data: "json, name=startUtcSec" })
  startUtcSec?: string;
}


export class VolumeUserInfoUserUploadedVolumeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=processingState" })
  processingState?: string;
}


// VolumeUserInfo
/** 
 * User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
**/
export class VolumeUserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acquiredTime" })
  acquiredTime?: string;

  @SpeakeasyMetadata({ data: "json, name=acquisitionType" })
  acquisitionType?: number;

  @SpeakeasyMetadata({ data: "json, name=copy" })
  copy?: VolumeUserInfoCopy;

  @SpeakeasyMetadata({ data: "json, name=entitlementType" })
  entitlementType?: number;

  @SpeakeasyMetadata({ data: "json, name=familySharing" })
  familySharing?: VolumeUserInfoFamilySharing;

  @SpeakeasyMetadata({ data: "json, name=isFamilySharedFromUser" })
  isFamilySharedFromUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isFamilySharedToUser" })
  isFamilySharedToUser?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isFamilySharingAllowed" })
  isFamilySharingAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isFamilySharingDisabledByFop" })
  isFamilySharingDisabledByFop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isInMyBooks" })
  isInMyBooks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPreordered" })
  isPreordered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isPurchased" })
  isPurchased?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isUploaded" })
  isUploaded?: boolean;

  @SpeakeasyMetadata({ data: "json, name=readingPosition" })
  readingPosition?: ReadingPosition;

  @SpeakeasyMetadata({ data: "json, name=rentalPeriod" })
  rentalPeriod?: VolumeUserInfoRentalPeriod;

  @SpeakeasyMetadata({ data: "json, name=rentalState" })
  rentalState?: string;

  @SpeakeasyMetadata({ data: "json, name=review" })
  review?: Review;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: string;

  @SpeakeasyMetadata({ data: "json, name=userUploadedVolumeInfo" })
  userUploadedVolumeInfo?: VolumeUserInfoUserUploadedVolumeInfo;
}


// VolumeVolumeInfoDimensions
/** 
 * Physical dimensions of this volume.
**/
export class VolumeVolumeInfoDimensions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: string;

  @SpeakeasyMetadata({ data: "json, name=thickness" })
  thickness?: string;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: string;
}


// VolumeVolumeInfoImageLinks
/** 
 * A list of image links for all the sizes that are available. (In LITE projection.)
**/
export class VolumeVolumeInfoImageLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extraLarge" })
  extraLarge?: string;

  @SpeakeasyMetadata({ data: "json, name=large" })
  large?: string;

  @SpeakeasyMetadata({ data: "json, name=medium" })
  medium?: string;

  @SpeakeasyMetadata({ data: "json, name=small" })
  small?: string;

  @SpeakeasyMetadata({ data: "json, name=smallThumbnail" })
  smallThumbnail?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail" })
  thumbnail?: string;
}


export class VolumeVolumeInfoIndustryIdentifiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// VolumeVolumeInfoPanelizationSummary
/** 
 * A top-level summary of the panelization info in this volume.
**/
export class VolumeVolumeInfoPanelizationSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containsEpubBubbles" })
  containsEpubBubbles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=containsImageBubbles" })
  containsImageBubbles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=epubBubbleVersion" })
  epubBubbleVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=imageBubbleVersion" })
  imageBubbleVersion?: string;
}


// VolumeVolumeInfoReadingModes
/** 
 * The reading modes available for this volume.
**/
export class VolumeVolumeInfoReadingModes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: boolean;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: boolean;
}


// VolumeVolumeInfo
/** 
 * General volume information.
**/
export class VolumeVolumeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowAnonLogging" })
  allowAnonLogging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=authors" })
  authors?: string[];

  @SpeakeasyMetadata({ data: "json, name=averageRating" })
  averageRating?: number;

  @SpeakeasyMetadata({ data: "json, name=canonicalVolumeLink" })
  canonicalVolumeLink?: string;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "json, name=comicsContent" })
  comicsContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contentVersion" })
  contentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: VolumeVolumeInfoDimensions;

  @SpeakeasyMetadata({ data: "json, name=imageLinks" })
  imageLinks?: VolumeVolumeInfoImageLinks;

  @SpeakeasyMetadata({ data: "json, name=industryIdentifiers", elemType: VolumeVolumeInfoIndustryIdentifiers })
  industryIdentifiers?: VolumeVolumeInfoIndustryIdentifiers[];

  @SpeakeasyMetadata({ data: "json, name=infoLink" })
  infoLink?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=mainCategory" })
  mainCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=maturityRating" })
  maturityRating?: string;

  @SpeakeasyMetadata({ data: "json, name=pageCount" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=panelizationSummary" })
  panelizationSummary?: VolumeVolumeInfoPanelizationSummary;

  @SpeakeasyMetadata({ data: "json, name=previewLink" })
  previewLink?: string;

  @SpeakeasyMetadata({ data: "json, name=printType" })
  printType?: string;

  @SpeakeasyMetadata({ data: "json, name=printedPageCount" })
  printedPageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=publishedDate" })
  publishedDate?: string;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=ratingsCount" })
  ratingsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=readingModes" })
  readingModes?: VolumeVolumeInfoReadingModes;

  @SpeakeasyMetadata({ data: "json, name=samplePageCount" })
  samplePageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=seriesInfo" })
  seriesInfo?: Volumeseriesinfo;

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class Volume extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessInfo" })
  accessInfo?: VolumeAccessInfo;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=layerInfo" })
  layerInfo?: VolumeLayerInfo;

  @SpeakeasyMetadata({ data: "json, name=recommendedInfo" })
  recommendedInfo?: VolumeRecommendedInfo;

  @SpeakeasyMetadata({ data: "json, name=saleInfo" })
  saleInfo?: VolumeSaleInfo;

  @SpeakeasyMetadata({ data: "json, name=searchInfo" })
  searchInfo?: VolumeSearchInfo;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo?: VolumeUserInfo;

  @SpeakeasyMetadata({ data: "json, name=volumeInfo" })
  volumeInfo?: VolumeVolumeInfo;
}

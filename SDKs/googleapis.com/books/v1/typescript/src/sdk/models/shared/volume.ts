import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DownloadAccessRestriction } from "./downloadaccessrestriction";
import { ReadingPosition } from "./readingposition";
import { Review } from "./review";
import { Volumeseriesinfo } from "./volumeseriesinfo";


// VolumeAccessInfoEpub
/** 
 * Information about epub content. (In LITE projection.)
**/
export class VolumeAccessInfoEpub extends SpeakeasyBase {
  @Metadata({ data: "json, name=acsTokenLink" })
  acsTokenLink?: string;

  @Metadata({ data: "json, name=downloadLink" })
  downloadLink?: string;

  @Metadata({ data: "json, name=isAvailable" })
  isAvailable?: boolean;
}


// VolumeAccessInfoPdf
/** 
 * Information about pdf content. (In LITE projection.)
**/
export class VolumeAccessInfoPdf extends SpeakeasyBase {
  @Metadata({ data: "json, name=acsTokenLink" })
  acsTokenLink?: string;

  @Metadata({ data: "json, name=downloadLink" })
  downloadLink?: string;

  @Metadata({ data: "json, name=isAvailable" })
  isAvailable?: boolean;
}


// VolumeAccessInfo
/** 
 * Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
**/
export class VolumeAccessInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessViewStatus" })
  accessViewStatus?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=downloadAccess" })
  downloadAccess?: DownloadAccessRestriction;

  @Metadata({ data: "json, name=driveImportedContentLink" })
  driveImportedContentLink?: string;

  @Metadata({ data: "json, name=embeddable" })
  embeddable?: boolean;

  @Metadata({ data: "json, name=epub" })
  epub?: VolumeAccessInfoEpub;

  @Metadata({ data: "json, name=explicitOfflineLicenseManagement" })
  explicitOfflineLicenseManagement?: boolean;

  @Metadata({ data: "json, name=pdf" })
  pdf?: VolumeAccessInfoPdf;

  @Metadata({ data: "json, name=publicDomain" })
  publicDomain?: boolean;

  @Metadata({ data: "json, name=quoteSharingAllowed" })
  quoteSharingAllowed?: boolean;

  @Metadata({ data: "json, name=textToSpeechPermission" })
  textToSpeechPermission?: string;

  @Metadata({ data: "json, name=viewOrderUrl" })
  viewOrderUrl?: string;

  @Metadata({ data: "json, name=viewability" })
  viewability?: string;

  @Metadata({ data: "json, name=webReaderLink" })
  webReaderLink?: string;
}


export class VolumeLayerInfoLayers extends SpeakeasyBase {
  @Metadata({ data: "json, name=layerId" })
  layerId?: string;

  @Metadata({ data: "json, name=volumeAnnotationsVersion" })
  volumeAnnotationsVersion?: string;
}


// VolumeLayerInfo
/** 
 * What layers exist in this volume and high level information about them.
**/
export class VolumeLayerInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=layers", elemType: shared.VolumeLayerInfoLayers })
  layers?: VolumeLayerInfoLayers[];
}


// VolumeRecommendedInfo
/** 
 * Recommendation related information for this volume.
**/
export class VolumeRecommendedInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=explanation" })
  explanation?: string;
}


// VolumeSaleInfoListPrice
/** 
 * Suggested retail price. (In LITE projection.)
**/
export class VolumeSaleInfoListPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;
}


// VolumeSaleInfoOffersListPrice
/** 
 * Offer list (=undiscounted) price in Micros.
**/
export class VolumeSaleInfoOffersListPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountInMicros" })
  amountInMicros?: number;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;
}


// VolumeSaleInfoOffersRentalDuration
/** 
 * The rental duration (for rental offers only).
**/
export class VolumeSaleInfoOffersRentalDuration extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=unit" })
  unit?: string;
}


// VolumeSaleInfoOffersRetailPrice
/** 
 * Offer retail (=discounted) price in Micros
**/
export class VolumeSaleInfoOffersRetailPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountInMicros" })
  amountInMicros?: number;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;
}


export class VolumeSaleInfoOffers extends SpeakeasyBase {
  @Metadata({ data: "json, name=finskyOfferType" })
  finskyOfferType?: number;

  @Metadata({ data: "json, name=giftable" })
  giftable?: boolean;

  @Metadata({ data: "json, name=listPrice" })
  listPrice?: VolumeSaleInfoOffersListPrice;

  @Metadata({ data: "json, name=rentalDuration" })
  rentalDuration?: VolumeSaleInfoOffersRentalDuration;

  @Metadata({ data: "json, name=retailPrice" })
  retailPrice?: VolumeSaleInfoOffersRetailPrice;
}


// VolumeSaleInfoRetailPrice
/** 
 * The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.)
**/
export class VolumeSaleInfoRetailPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=amount" })
  amount?: number;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;
}


// VolumeSaleInfo
/** 
 * Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
**/
export class VolumeSaleInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=buyLink" })
  buyLink?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=isEbook" })
  isEbook?: boolean;

  @Metadata({ data: "json, name=listPrice" })
  listPrice?: VolumeSaleInfoListPrice;

  @Metadata({ data: "json, name=offers", elemType: shared.VolumeSaleInfoOffers })
  offers?: VolumeSaleInfoOffers[];

  @Metadata({ data: "json, name=onSaleDate" })
  onSaleDate?: string;

  @Metadata({ data: "json, name=retailPrice" })
  retailPrice?: VolumeSaleInfoRetailPrice;

  @Metadata({ data: "json, name=saleability" })
  saleability?: string;
}


// VolumeSearchInfo
/** 
 * Search result information related to this volume.
**/
export class VolumeSearchInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=textSnippet" })
  textSnippet?: string;
}


// VolumeUserInfoCopy
/** 
 * Copy/Paste accounting information.
**/
export class VolumeUserInfoCopy extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedCharacterCount" })
  allowedCharacterCount?: number;

  @Metadata({ data: "json, name=limitType" })
  limitType?: string;

  @Metadata({ data: "json, name=remainingCharacterCount" })
  remainingCharacterCount?: number;

  @Metadata({ data: "json, name=updated" })
  updated?: string;
}


// VolumeUserInfoFamilySharing
/** 
 * Information on the ability to share with the family.
**/
export class VolumeUserInfoFamilySharing extends SpeakeasyBase {
  @Metadata({ data: "json, name=familyRole" })
  familyRole?: string;

  @Metadata({ data: "json, name=isSharingAllowed" })
  isSharingAllowed?: boolean;

  @Metadata({ data: "json, name=isSharingDisabledByFop" })
  isSharingDisabledByFop?: boolean;
}


// VolumeUserInfoRentalPeriod
/** 
 * Period during this book is/was a valid rental.
**/
export class VolumeUserInfoRentalPeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=endUtcSec" })
  endUtcSec?: string;

  @Metadata({ data: "json, name=startUtcSec" })
  startUtcSec?: string;
}


export class VolumeUserInfoUserUploadedVolumeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=processingState" })
  processingState?: string;
}


// VolumeUserInfo
/** 
 * User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
**/
export class VolumeUserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=acquiredTime" })
  acquiredTime?: string;

  @Metadata({ data: "json, name=acquisitionType" })
  acquisitionType?: number;

  @Metadata({ data: "json, name=copy" })
  copy?: VolumeUserInfoCopy;

  @Metadata({ data: "json, name=entitlementType" })
  entitlementType?: number;

  @Metadata({ data: "json, name=familySharing" })
  familySharing?: VolumeUserInfoFamilySharing;

  @Metadata({ data: "json, name=isFamilySharedFromUser" })
  isFamilySharedFromUser?: boolean;

  @Metadata({ data: "json, name=isFamilySharedToUser" })
  isFamilySharedToUser?: boolean;

  @Metadata({ data: "json, name=isFamilySharingAllowed" })
  isFamilySharingAllowed?: boolean;

  @Metadata({ data: "json, name=isFamilySharingDisabledByFop" })
  isFamilySharingDisabledByFop?: boolean;

  @Metadata({ data: "json, name=isInMyBooks" })
  isInMyBooks?: boolean;

  @Metadata({ data: "json, name=isPreordered" })
  isPreordered?: boolean;

  @Metadata({ data: "json, name=isPurchased" })
  isPurchased?: boolean;

  @Metadata({ data: "json, name=isUploaded" })
  isUploaded?: boolean;

  @Metadata({ data: "json, name=readingPosition" })
  readingPosition?: ReadingPosition;

  @Metadata({ data: "json, name=rentalPeriod" })
  rentalPeriod?: VolumeUserInfoRentalPeriod;

  @Metadata({ data: "json, name=rentalState" })
  rentalState?: string;

  @Metadata({ data: "json, name=review" })
  review?: Review;

  @Metadata({ data: "json, name=updated" })
  updated?: string;

  @Metadata({ data: "json, name=userUploadedVolumeInfo" })
  userUploadedVolumeInfo?: VolumeUserInfoUserUploadedVolumeInfo;
}


// VolumeVolumeInfoDimensions
/** 
 * Physical dimensions of this volume.
**/
export class VolumeVolumeInfoDimensions extends SpeakeasyBase {
  @Metadata({ data: "json, name=height" })
  height?: string;

  @Metadata({ data: "json, name=thickness" })
  thickness?: string;

  @Metadata({ data: "json, name=width" })
  width?: string;
}


// VolumeVolumeInfoImageLinks
/** 
 * A list of image links for all the sizes that are available. (In LITE projection.)
**/
export class VolumeVolumeInfoImageLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=extraLarge" })
  extraLarge?: string;

  @Metadata({ data: "json, name=large" })
  large?: string;

  @Metadata({ data: "json, name=medium" })
  medium?: string;

  @Metadata({ data: "json, name=small" })
  small?: string;

  @Metadata({ data: "json, name=smallThumbnail" })
  smallThumbnail?: string;

  @Metadata({ data: "json, name=thumbnail" })
  thumbnail?: string;
}


export class VolumeVolumeInfoIndustryIdentifiers extends SpeakeasyBase {
  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// VolumeVolumeInfoPanelizationSummary
/** 
 * A top-level summary of the panelization info in this volume.
**/
export class VolumeVolumeInfoPanelizationSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=containsEpubBubbles" })
  containsEpubBubbles?: boolean;

  @Metadata({ data: "json, name=containsImageBubbles" })
  containsImageBubbles?: boolean;

  @Metadata({ data: "json, name=epubBubbleVersion" })
  epubBubbleVersion?: string;

  @Metadata({ data: "json, name=imageBubbleVersion" })
  imageBubbleVersion?: string;
}


// VolumeVolumeInfoReadingModes
/** 
 * The reading modes available for this volume.
**/
export class VolumeVolumeInfoReadingModes extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: boolean;

  @Metadata({ data: "json, name=text" })
  text?: boolean;
}


// VolumeVolumeInfo
/** 
 * General volume information.
**/
export class VolumeVolumeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowAnonLogging" })
  allowAnonLogging?: boolean;

  @Metadata({ data: "json, name=authors" })
  authors?: string[];

  @Metadata({ data: "json, name=averageRating" })
  averageRating?: number;

  @Metadata({ data: "json, name=canonicalVolumeLink" })
  canonicalVolumeLink?: string;

  @Metadata({ data: "json, name=categories" })
  categories?: string[];

  @Metadata({ data: "json, name=comicsContent" })
  comicsContent?: boolean;

  @Metadata({ data: "json, name=contentVersion" })
  contentVersion?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: VolumeVolumeInfoDimensions;

  @Metadata({ data: "json, name=imageLinks" })
  imageLinks?: VolumeVolumeInfoImageLinks;

  @Metadata({ data: "json, name=industryIdentifiers", elemType: shared.VolumeVolumeInfoIndustryIdentifiers })
  industryIdentifiers?: VolumeVolumeInfoIndustryIdentifiers[];

  @Metadata({ data: "json, name=infoLink" })
  infoLink?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=mainCategory" })
  mainCategory?: string;

  @Metadata({ data: "json, name=maturityRating" })
  maturityRating?: string;

  @Metadata({ data: "json, name=pageCount" })
  pageCount?: number;

  @Metadata({ data: "json, name=panelizationSummary" })
  panelizationSummary?: VolumeVolumeInfoPanelizationSummary;

  @Metadata({ data: "json, name=previewLink" })
  previewLink?: string;

  @Metadata({ data: "json, name=printType" })
  printType?: string;

  @Metadata({ data: "json, name=printedPageCount" })
  printedPageCount?: number;

  @Metadata({ data: "json, name=publishedDate" })
  publishedDate?: string;

  @Metadata({ data: "json, name=publisher" })
  publisher?: string;

  @Metadata({ data: "json, name=ratingsCount" })
  ratingsCount?: number;

  @Metadata({ data: "json, name=readingModes" })
  readingModes?: VolumeVolumeInfoReadingModes;

  @Metadata({ data: "json, name=samplePageCount" })
  samplePageCount?: number;

  @Metadata({ data: "json, name=seriesInfo" })
  seriesInfo?: Volumeseriesinfo;

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}


export class Volume extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessInfo" })
  accessInfo?: VolumeAccessInfo;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=layerInfo" })
  layerInfo?: VolumeLayerInfo;

  @Metadata({ data: "json, name=recommendedInfo" })
  recommendedInfo?: VolumeRecommendedInfo;

  @Metadata({ data: "json, name=saleInfo" })
  saleInfo?: VolumeSaleInfo;

  @Metadata({ data: "json, name=searchInfo" })
  searchInfo?: VolumeSearchInfo;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=userInfo" })
  userInfo?: VolumeUserInfo;

  @Metadata({ data: "json, name=volumeInfo" })
  volumeInfo?: VolumeVolumeInfo;
}

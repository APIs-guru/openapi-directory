import { SpeakeasyBase } from "../../../internal/utils";
import { DownloadAccessRestriction } from "./downloadaccessrestriction";
import { ReadingPosition } from "./readingposition";
import { Review } from "./review";
import { Volumeseriesinfo } from "./volumeseriesinfo";
/**
 * Information about epub content. (In LITE projection.)
**/
export declare class VolumeAccessInfoEpub extends SpeakeasyBase {
    acsTokenLink?: string;
    downloadLink?: string;
    isAvailable?: boolean;
}
/**
 * Information about pdf content. (In LITE projection.)
**/
export declare class VolumeAccessInfoPdf extends SpeakeasyBase {
    acsTokenLink?: string;
    downloadLink?: string;
    isAvailable?: boolean;
}
/**
 * Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
**/
export declare class VolumeAccessInfo extends SpeakeasyBase {
    accessViewStatus?: string;
    country?: string;
    downloadAccess?: DownloadAccessRestriction;
    driveImportedContentLink?: string;
    embeddable?: boolean;
    epub?: VolumeAccessInfoEpub;
    explicitOfflineLicenseManagement?: boolean;
    pdf?: VolumeAccessInfoPdf;
    publicDomain?: boolean;
    quoteSharingAllowed?: boolean;
    textToSpeechPermission?: string;
    viewOrderUrl?: string;
    viewability?: string;
    webReaderLink?: string;
}
export declare class VolumeLayerInfoLayers extends SpeakeasyBase {
    layerId?: string;
    volumeAnnotationsVersion?: string;
}
/**
 * What layers exist in this volume and high level information about them.
**/
export declare class VolumeLayerInfo extends SpeakeasyBase {
    layers?: VolumeLayerInfoLayers[];
}
/**
 * Recommendation related information for this volume.
**/
export declare class VolumeRecommendedInfo extends SpeakeasyBase {
    explanation?: string;
}
/**
 * Suggested retail price. (In LITE projection.)
**/
export declare class VolumeSaleInfoListPrice extends SpeakeasyBase {
    amount?: number;
    currencyCode?: string;
}
/**
 * Offer list (=undiscounted) price in Micros.
**/
export declare class VolumeSaleInfoOffersListPrice extends SpeakeasyBase {
    amountInMicros?: number;
    currencyCode?: string;
}
/**
 * The rental duration (for rental offers only).
**/
export declare class VolumeSaleInfoOffersRentalDuration extends SpeakeasyBase {
    count?: number;
    unit?: string;
}
/**
 * Offer retail (=discounted) price in Micros
**/
export declare class VolumeSaleInfoOffersRetailPrice extends SpeakeasyBase {
    amountInMicros?: number;
    currencyCode?: string;
}
export declare class VolumeSaleInfoOffers extends SpeakeasyBase {
    finskyOfferType?: number;
    giftable?: boolean;
    listPrice?: VolumeSaleInfoOffersListPrice;
    rentalDuration?: VolumeSaleInfoOffersRentalDuration;
    retailPrice?: VolumeSaleInfoOffersRetailPrice;
}
/**
 * The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.)
**/
export declare class VolumeSaleInfoRetailPrice extends SpeakeasyBase {
    amount?: number;
    currencyCode?: string;
}
/**
 * Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
**/
export declare class VolumeSaleInfo extends SpeakeasyBase {
    buyLink?: string;
    country?: string;
    isEbook?: boolean;
    listPrice?: VolumeSaleInfoListPrice;
    offers?: VolumeSaleInfoOffers[];
    onSaleDate?: string;
    retailPrice?: VolumeSaleInfoRetailPrice;
    saleability?: string;
}
/**
 * Search result information related to this volume.
**/
export declare class VolumeSearchInfo extends SpeakeasyBase {
    textSnippet?: string;
}
/**
 * Copy/Paste accounting information.
**/
export declare class VolumeUserInfoCopy extends SpeakeasyBase {
    allowedCharacterCount?: number;
    limitType?: string;
    remainingCharacterCount?: number;
    updated?: string;
}
/**
 * Information on the ability to share with the family.
**/
export declare class VolumeUserInfoFamilySharing extends SpeakeasyBase {
    familyRole?: string;
    isSharingAllowed?: boolean;
    isSharingDisabledByFop?: boolean;
}
/**
 * Period during this book is/was a valid rental.
**/
export declare class VolumeUserInfoRentalPeriod extends SpeakeasyBase {
    endUtcSec?: string;
    startUtcSec?: string;
}
export declare class VolumeUserInfoUserUploadedVolumeInfo extends SpeakeasyBase {
    processingState?: string;
}
/**
 * User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
**/
export declare class VolumeUserInfo extends SpeakeasyBase {
    acquiredTime?: string;
    acquisitionType?: number;
    copy?: VolumeUserInfoCopy;
    entitlementType?: number;
    familySharing?: VolumeUserInfoFamilySharing;
    isFamilySharedFromUser?: boolean;
    isFamilySharedToUser?: boolean;
    isFamilySharingAllowed?: boolean;
    isFamilySharingDisabledByFop?: boolean;
    isInMyBooks?: boolean;
    isPreordered?: boolean;
    isPurchased?: boolean;
    isUploaded?: boolean;
    readingPosition?: ReadingPosition;
    rentalPeriod?: VolumeUserInfoRentalPeriod;
    rentalState?: string;
    review?: Review;
    updated?: string;
    userUploadedVolumeInfo?: VolumeUserInfoUserUploadedVolumeInfo;
}
/**
 * Physical dimensions of this volume.
**/
export declare class VolumeVolumeInfoDimensions extends SpeakeasyBase {
    height?: string;
    thickness?: string;
    width?: string;
}
/**
 * A list of image links for all the sizes that are available. (In LITE projection.)
**/
export declare class VolumeVolumeInfoImageLinks extends SpeakeasyBase {
    extraLarge?: string;
    large?: string;
    medium?: string;
    small?: string;
    smallThumbnail?: string;
    thumbnail?: string;
}
export declare class VolumeVolumeInfoIndustryIdentifiers extends SpeakeasyBase {
    identifier?: string;
    type?: string;
}
/**
 * A top-level summary of the panelization info in this volume.
**/
export declare class VolumeVolumeInfoPanelizationSummary extends SpeakeasyBase {
    containsEpubBubbles?: boolean;
    containsImageBubbles?: boolean;
    epubBubbleVersion?: string;
    imageBubbleVersion?: string;
}
/**
 * The reading modes available for this volume.
**/
export declare class VolumeVolumeInfoReadingModes extends SpeakeasyBase {
    image?: boolean;
    text?: boolean;
}
/**
 * General volume information.
**/
export declare class VolumeVolumeInfo extends SpeakeasyBase {
    allowAnonLogging?: boolean;
    authors?: string[];
    averageRating?: number;
    canonicalVolumeLink?: string;
    categories?: string[];
    comicsContent?: boolean;
    contentVersion?: string;
    description?: string;
    dimensions?: VolumeVolumeInfoDimensions;
    imageLinks?: VolumeVolumeInfoImageLinks;
    industryIdentifiers?: VolumeVolumeInfoIndustryIdentifiers[];
    infoLink?: string;
    language?: string;
    mainCategory?: string;
    maturityRating?: string;
    pageCount?: number;
    panelizationSummary?: VolumeVolumeInfoPanelizationSummary;
    previewLink?: string;
    printType?: string;
    printedPageCount?: number;
    publishedDate?: string;
    publisher?: string;
    ratingsCount?: number;
    readingModes?: VolumeVolumeInfoReadingModes;
    samplePageCount?: number;
    seriesInfo?: Volumeseriesinfo;
    subtitle?: string;
    title?: string;
}
export declare class Volume extends SpeakeasyBase {
    accessInfo?: VolumeAccessInfo;
    etag?: string;
    id?: string;
    kind?: string;
    layerInfo?: VolumeLayerInfo;
    recommendedInfo?: VolumeRecommendedInfo;
    saleInfo?: VolumeSaleInfo;
    searchInfo?: VolumeSearchInfo;
    selfLink?: string;
    userInfo?: VolumeUserInfo;
    volumeInfo?: VolumeVolumeInfo;
}

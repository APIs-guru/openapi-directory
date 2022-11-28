var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DownloadAccessRestriction } from "./downloadaccessrestriction";
import { ReadingPosition } from "./readingposition";
import { Review } from "./review";
import { Volumeseriesinfo } from "./volumeseriesinfo";
// VolumeAccessInfoEpub
/**
 * Information about epub content. (In LITE projection.)
**/
var VolumeAccessInfoEpub = /** @class */ (function (_super) {
    __extends(VolumeAccessInfoEpub, _super);
    function VolumeAccessInfoEpub() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acsTokenLink" }),
        __metadata("design:type", String)
    ], VolumeAccessInfoEpub.prototype, "acsTokenLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadLink" }),
        __metadata("design:type", String)
    ], VolumeAccessInfoEpub.prototype, "downloadLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAvailable" }),
        __metadata("design:type", Boolean)
    ], VolumeAccessInfoEpub.prototype, "isAvailable", void 0);
    return VolumeAccessInfoEpub;
}(SpeakeasyBase));
export { VolumeAccessInfoEpub };
// VolumeAccessInfoPdf
/**
 * Information about pdf content. (In LITE projection.)
**/
var VolumeAccessInfoPdf = /** @class */ (function (_super) {
    __extends(VolumeAccessInfoPdf, _super);
    function VolumeAccessInfoPdf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acsTokenLink" }),
        __metadata("design:type", String)
    ], VolumeAccessInfoPdf.prototype, "acsTokenLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadLink" }),
        __metadata("design:type", String)
    ], VolumeAccessInfoPdf.prototype, "downloadLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isAvailable" }),
        __metadata("design:type", Boolean)
    ], VolumeAccessInfoPdf.prototype, "isAvailable", void 0);
    return VolumeAccessInfoPdf;
}(SpeakeasyBase));
export { VolumeAccessInfoPdf };
// VolumeAccessInfo
/**
 * Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).
**/
var VolumeAccessInfo = /** @class */ (function (_super) {
    __extends(VolumeAccessInfo, _super);
    function VolumeAccessInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessViewStatus" }),
        __metadata("design:type", String)
    ], VolumeAccessInfo.prototype, "accessViewStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], VolumeAccessInfo.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=downloadAccess" }),
        __metadata("design:type", DownloadAccessRestriction)
    ], VolumeAccessInfo.prototype, "downloadAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=driveImportedContentLink" }),
        __metadata("design:type", String)
    ], VolumeAccessInfo.prototype, "driveImportedContentLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=embeddable" }),
        __metadata("design:type", Boolean)
    ], VolumeAccessInfo.prototype, "embeddable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=epub" }),
        __metadata("design:type", VolumeAccessInfoEpub)
    ], VolumeAccessInfo.prototype, "epub", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explicitOfflineLicenseManagement" }),
        __metadata("design:type", Boolean)
    ], VolumeAccessInfo.prototype, "explicitOfflineLicenseManagement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pdf" }),
        __metadata("design:type", VolumeAccessInfoPdf)
    ], VolumeAccessInfo.prototype, "pdf", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publicDomain" }),
        __metadata("design:type", Boolean)
    ], VolumeAccessInfo.prototype, "publicDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quoteSharingAllowed" }),
        __metadata("design:type", Boolean)
    ], VolumeAccessInfo.prototype, "quoteSharingAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textToSpeechPermission" }),
        __metadata("design:type", String)
    ], VolumeAccessInfo.prototype, "textToSpeechPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewOrderUrl" }),
        __metadata("design:type", String)
    ], VolumeAccessInfo.prototype, "viewOrderUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewability" }),
        __metadata("design:type", String)
    ], VolumeAccessInfo.prototype, "viewability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webReaderLink" }),
        __metadata("design:type", String)
    ], VolumeAccessInfo.prototype, "webReaderLink", void 0);
    return VolumeAccessInfo;
}(SpeakeasyBase));
export { VolumeAccessInfo };
var VolumeLayerInfoLayers = /** @class */ (function (_super) {
    __extends(VolumeLayerInfoLayers, _super);
    function VolumeLayerInfoLayers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layerId" }),
        __metadata("design:type", String)
    ], VolumeLayerInfoLayers.prototype, "layerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeAnnotationsVersion" }),
        __metadata("design:type", String)
    ], VolumeLayerInfoLayers.prototype, "volumeAnnotationsVersion", void 0);
    return VolumeLayerInfoLayers;
}(SpeakeasyBase));
export { VolumeLayerInfoLayers };
// VolumeLayerInfo
/**
 * What layers exist in this volume and high level information about them.
**/
var VolumeLayerInfo = /** @class */ (function (_super) {
    __extends(VolumeLayerInfo, _super);
    function VolumeLayerInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layers", elemType: VolumeLayerInfoLayers }),
        __metadata("design:type", Array)
    ], VolumeLayerInfo.prototype, "layers", void 0);
    return VolumeLayerInfo;
}(SpeakeasyBase));
export { VolumeLayerInfo };
// VolumeRecommendedInfo
/**
 * Recommendation related information for this volume.
**/
var VolumeRecommendedInfo = /** @class */ (function (_super) {
    __extends(VolumeRecommendedInfo, _super);
    function VolumeRecommendedInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=explanation" }),
        __metadata("design:type", String)
    ], VolumeRecommendedInfo.prototype, "explanation", void 0);
    return VolumeRecommendedInfo;
}(SpeakeasyBase));
export { VolumeRecommendedInfo };
// VolumeSaleInfoListPrice
/**
 * Suggested retail price. (In LITE projection.)
**/
var VolumeSaleInfoListPrice = /** @class */ (function (_super) {
    __extends(VolumeSaleInfoListPrice, _super);
    function VolumeSaleInfoListPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], VolumeSaleInfoListPrice.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], VolumeSaleInfoListPrice.prototype, "currencyCode", void 0);
    return VolumeSaleInfoListPrice;
}(SpeakeasyBase));
export { VolumeSaleInfoListPrice };
// VolumeSaleInfoOffersListPrice
/**
 * Offer list (=undiscounted) price in Micros.
**/
var VolumeSaleInfoOffersListPrice = /** @class */ (function (_super) {
    __extends(VolumeSaleInfoOffersListPrice, _super);
    function VolumeSaleInfoOffersListPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountInMicros" }),
        __metadata("design:type", Number)
    ], VolumeSaleInfoOffersListPrice.prototype, "amountInMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], VolumeSaleInfoOffersListPrice.prototype, "currencyCode", void 0);
    return VolumeSaleInfoOffersListPrice;
}(SpeakeasyBase));
export { VolumeSaleInfoOffersListPrice };
// VolumeSaleInfoOffersRentalDuration
/**
 * The rental duration (for rental offers only).
**/
var VolumeSaleInfoOffersRentalDuration = /** @class */ (function (_super) {
    __extends(VolumeSaleInfoOffersRentalDuration, _super);
    function VolumeSaleInfoOffersRentalDuration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=count" }),
        __metadata("design:type", Number)
    ], VolumeSaleInfoOffersRentalDuration.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unit" }),
        __metadata("design:type", String)
    ], VolumeSaleInfoOffersRentalDuration.prototype, "unit", void 0);
    return VolumeSaleInfoOffersRentalDuration;
}(SpeakeasyBase));
export { VolumeSaleInfoOffersRentalDuration };
// VolumeSaleInfoOffersRetailPrice
/**
 * Offer retail (=discounted) price in Micros
**/
var VolumeSaleInfoOffersRetailPrice = /** @class */ (function (_super) {
    __extends(VolumeSaleInfoOffersRetailPrice, _super);
    function VolumeSaleInfoOffersRetailPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amountInMicros" }),
        __metadata("design:type", Number)
    ], VolumeSaleInfoOffersRetailPrice.prototype, "amountInMicros", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], VolumeSaleInfoOffersRetailPrice.prototype, "currencyCode", void 0);
    return VolumeSaleInfoOffersRetailPrice;
}(SpeakeasyBase));
export { VolumeSaleInfoOffersRetailPrice };
var VolumeSaleInfoOffers = /** @class */ (function (_super) {
    __extends(VolumeSaleInfoOffers, _super);
    function VolumeSaleInfoOffers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finskyOfferType" }),
        __metadata("design:type", Number)
    ], VolumeSaleInfoOffers.prototype, "finskyOfferType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=giftable" }),
        __metadata("design:type", Boolean)
    ], VolumeSaleInfoOffers.prototype, "giftable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listPrice" }),
        __metadata("design:type", VolumeSaleInfoOffersListPrice)
    ], VolumeSaleInfoOffers.prototype, "listPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rentalDuration" }),
        __metadata("design:type", VolumeSaleInfoOffersRentalDuration)
    ], VolumeSaleInfoOffers.prototype, "rentalDuration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retailPrice" }),
        __metadata("design:type", VolumeSaleInfoOffersRetailPrice)
    ], VolumeSaleInfoOffers.prototype, "retailPrice", void 0);
    return VolumeSaleInfoOffers;
}(SpeakeasyBase));
export { VolumeSaleInfoOffers };
// VolumeSaleInfoRetailPrice
/**
 * The actual selling price of the book. This is the same as the suggested retail or list price unless there are offers or discounts on this volume. (In LITE projection.)
**/
var VolumeSaleInfoRetailPrice = /** @class */ (function (_super) {
    __extends(VolumeSaleInfoRetailPrice, _super);
    function VolumeSaleInfoRetailPrice() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=amount" }),
        __metadata("design:type", Number)
    ], VolumeSaleInfoRetailPrice.prototype, "amount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currencyCode" }),
        __metadata("design:type", String)
    ], VolumeSaleInfoRetailPrice.prototype, "currencyCode", void 0);
    return VolumeSaleInfoRetailPrice;
}(SpeakeasyBase));
export { VolumeSaleInfoRetailPrice };
// VolumeSaleInfo
/**
 * Any information about a volume related to the eBookstore and/or purchaseability. This information can depend on the country where the request originates from (i.e. books may not be for sale in certain countries).
**/
var VolumeSaleInfo = /** @class */ (function (_super) {
    __extends(VolumeSaleInfo, _super);
    function VolumeSaleInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=buyLink" }),
        __metadata("design:type", String)
    ], VolumeSaleInfo.prototype, "buyLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], VolumeSaleInfo.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isEbook" }),
        __metadata("design:type", Boolean)
    ], VolumeSaleInfo.prototype, "isEbook", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=listPrice" }),
        __metadata("design:type", VolumeSaleInfoListPrice)
    ], VolumeSaleInfo.prototype, "listPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offers", elemType: VolumeSaleInfoOffers }),
        __metadata("design:type", Array)
    ], VolumeSaleInfo.prototype, "offers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=onSaleDate" }),
        __metadata("design:type", String)
    ], VolumeSaleInfo.prototype, "onSaleDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=retailPrice" }),
        __metadata("design:type", VolumeSaleInfoRetailPrice)
    ], VolumeSaleInfo.prototype, "retailPrice", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saleability" }),
        __metadata("design:type", String)
    ], VolumeSaleInfo.prototype, "saleability", void 0);
    return VolumeSaleInfo;
}(SpeakeasyBase));
export { VolumeSaleInfo };
// VolumeSearchInfo
/**
 * Search result information related to this volume.
**/
var VolumeSearchInfo = /** @class */ (function (_super) {
    __extends(VolumeSearchInfo, _super);
    function VolumeSearchInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=textSnippet" }),
        __metadata("design:type", String)
    ], VolumeSearchInfo.prototype, "textSnippet", void 0);
    return VolumeSearchInfo;
}(SpeakeasyBase));
export { VolumeSearchInfo };
// VolumeUserInfoCopy
/**
 * Copy/Paste accounting information.
**/
var VolumeUserInfoCopy = /** @class */ (function (_super) {
    __extends(VolumeUserInfoCopy, _super);
    function VolumeUserInfoCopy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedCharacterCount" }),
        __metadata("design:type", Number)
    ], VolumeUserInfoCopy.prototype, "allowedCharacterCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limitType" }),
        __metadata("design:type", String)
    ], VolumeUserInfoCopy.prototype, "limitType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remainingCharacterCount" }),
        __metadata("design:type", Number)
    ], VolumeUserInfoCopy.prototype, "remainingCharacterCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], VolumeUserInfoCopy.prototype, "updated", void 0);
    return VolumeUserInfoCopy;
}(SpeakeasyBase));
export { VolumeUserInfoCopy };
// VolumeUserInfoFamilySharing
/**
 * Information on the ability to share with the family.
**/
var VolumeUserInfoFamilySharing = /** @class */ (function (_super) {
    __extends(VolumeUserInfoFamilySharing, _super);
    function VolumeUserInfoFamilySharing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=familyRole" }),
        __metadata("design:type", String)
    ], VolumeUserInfoFamilySharing.prototype, "familyRole", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSharingAllowed" }),
        __metadata("design:type", Boolean)
    ], VolumeUserInfoFamilySharing.prototype, "isSharingAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isSharingDisabledByFop" }),
        __metadata("design:type", Boolean)
    ], VolumeUserInfoFamilySharing.prototype, "isSharingDisabledByFop", void 0);
    return VolumeUserInfoFamilySharing;
}(SpeakeasyBase));
export { VolumeUserInfoFamilySharing };
// VolumeUserInfoRentalPeriod
/**
 * Period during this book is/was a valid rental.
**/
var VolumeUserInfoRentalPeriod = /** @class */ (function (_super) {
    __extends(VolumeUserInfoRentalPeriod, _super);
    function VolumeUserInfoRentalPeriod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endUtcSec" }),
        __metadata("design:type", String)
    ], VolumeUserInfoRentalPeriod.prototype, "endUtcSec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startUtcSec" }),
        __metadata("design:type", String)
    ], VolumeUserInfoRentalPeriod.prototype, "startUtcSec", void 0);
    return VolumeUserInfoRentalPeriod;
}(SpeakeasyBase));
export { VolumeUserInfoRentalPeriod };
var VolumeUserInfoUserUploadedVolumeInfo = /** @class */ (function (_super) {
    __extends(VolumeUserInfoUserUploadedVolumeInfo, _super);
    function VolumeUserInfoUserUploadedVolumeInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=processingState" }),
        __metadata("design:type", String)
    ], VolumeUserInfoUserUploadedVolumeInfo.prototype, "processingState", void 0);
    return VolumeUserInfoUserUploadedVolumeInfo;
}(SpeakeasyBase));
export { VolumeUserInfoUserUploadedVolumeInfo };
// VolumeUserInfo
/**
 * User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)
**/
var VolumeUserInfo = /** @class */ (function (_super) {
    __extends(VolumeUserInfo, _super);
    function VolumeUserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acquiredTime" }),
        __metadata("design:type", String)
    ], VolumeUserInfo.prototype, "acquiredTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=acquisitionType" }),
        __metadata("design:type", Number)
    ], VolumeUserInfo.prototype, "acquisitionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copy" }),
        __metadata("design:type", VolumeUserInfoCopy)
    ], VolumeUserInfo.prototype, "copy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entitlementType" }),
        __metadata("design:type", Number)
    ], VolumeUserInfo.prototype, "entitlementType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=familySharing" }),
        __metadata("design:type", VolumeUserInfoFamilySharing)
    ], VolumeUserInfo.prototype, "familySharing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFamilySharedFromUser" }),
        __metadata("design:type", Boolean)
    ], VolumeUserInfo.prototype, "isFamilySharedFromUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFamilySharedToUser" }),
        __metadata("design:type", Boolean)
    ], VolumeUserInfo.prototype, "isFamilySharedToUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFamilySharingAllowed" }),
        __metadata("design:type", Boolean)
    ], VolumeUserInfo.prototype, "isFamilySharingAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isFamilySharingDisabledByFop" }),
        __metadata("design:type", Boolean)
    ], VolumeUserInfo.prototype, "isFamilySharingDisabledByFop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isInMyBooks" }),
        __metadata("design:type", Boolean)
    ], VolumeUserInfo.prototype, "isInMyBooks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPreordered" }),
        __metadata("design:type", Boolean)
    ], VolumeUserInfo.prototype, "isPreordered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isPurchased" }),
        __metadata("design:type", Boolean)
    ], VolumeUserInfo.prototype, "isPurchased", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isUploaded" }),
        __metadata("design:type", Boolean)
    ], VolumeUserInfo.prototype, "isUploaded", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readingPosition" }),
        __metadata("design:type", ReadingPosition)
    ], VolumeUserInfo.prototype, "readingPosition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rentalPeriod" }),
        __metadata("design:type", VolumeUserInfoRentalPeriod)
    ], VolumeUserInfo.prototype, "rentalPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rentalState" }),
        __metadata("design:type", String)
    ], VolumeUserInfo.prototype, "rentalState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=review" }),
        __metadata("design:type", Review)
    ], VolumeUserInfo.prototype, "review", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", String)
    ], VolumeUserInfo.prototype, "updated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userUploadedVolumeInfo" }),
        __metadata("design:type", VolumeUserInfoUserUploadedVolumeInfo)
    ], VolumeUserInfo.prototype, "userUploadedVolumeInfo", void 0);
    return VolumeUserInfo;
}(SpeakeasyBase));
export { VolumeUserInfo };
// VolumeVolumeInfoDimensions
/**
 * Physical dimensions of this volume.
**/
var VolumeVolumeInfoDimensions = /** @class */ (function (_super) {
    __extends(VolumeVolumeInfoDimensions, _super);
    function VolumeVolumeInfoDimensions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=height" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfoDimensions.prototype, "height", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thickness" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfoDimensions.prototype, "thickness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=width" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfoDimensions.prototype, "width", void 0);
    return VolumeVolumeInfoDimensions;
}(SpeakeasyBase));
export { VolumeVolumeInfoDimensions };
// VolumeVolumeInfoImageLinks
/**
 * A list of image links for all the sizes that are available. (In LITE projection.)
**/
var VolumeVolumeInfoImageLinks = /** @class */ (function (_super) {
    __extends(VolumeVolumeInfoImageLinks, _super);
    function VolumeVolumeInfoImageLinks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extraLarge" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfoImageLinks.prototype, "extraLarge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=large" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfoImageLinks.prototype, "large", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=medium" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfoImageLinks.prototype, "medium", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=small" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfoImageLinks.prototype, "small", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smallThumbnail" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfoImageLinks.prototype, "smallThumbnail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnail" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfoImageLinks.prototype, "thumbnail", void 0);
    return VolumeVolumeInfoImageLinks;
}(SpeakeasyBase));
export { VolumeVolumeInfoImageLinks };
var VolumeVolumeInfoIndustryIdentifiers = /** @class */ (function (_super) {
    __extends(VolumeVolumeInfoIndustryIdentifiers, _super);
    function VolumeVolumeInfoIndustryIdentifiers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifier" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfoIndustryIdentifiers.prototype, "identifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfoIndustryIdentifiers.prototype, "type", void 0);
    return VolumeVolumeInfoIndustryIdentifiers;
}(SpeakeasyBase));
export { VolumeVolumeInfoIndustryIdentifiers };
// VolumeVolumeInfoPanelizationSummary
/**
 * A top-level summary of the panelization info in this volume.
**/
var VolumeVolumeInfoPanelizationSummary = /** @class */ (function (_super) {
    __extends(VolumeVolumeInfoPanelizationSummary, _super);
    function VolumeVolumeInfoPanelizationSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containsEpubBubbles" }),
        __metadata("design:type", Boolean)
    ], VolumeVolumeInfoPanelizationSummary.prototype, "containsEpubBubbles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=containsImageBubbles" }),
        __metadata("design:type", Boolean)
    ], VolumeVolumeInfoPanelizationSummary.prototype, "containsImageBubbles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=epubBubbleVersion" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfoPanelizationSummary.prototype, "epubBubbleVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageBubbleVersion" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfoPanelizationSummary.prototype, "imageBubbleVersion", void 0);
    return VolumeVolumeInfoPanelizationSummary;
}(SpeakeasyBase));
export { VolumeVolumeInfoPanelizationSummary };
// VolumeVolumeInfoReadingModes
/**
 * The reading modes available for this volume.
**/
var VolumeVolumeInfoReadingModes = /** @class */ (function (_super) {
    __extends(VolumeVolumeInfoReadingModes, _super);
    function VolumeVolumeInfoReadingModes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image" }),
        __metadata("design:type", Boolean)
    ], VolumeVolumeInfoReadingModes.prototype, "image", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", Boolean)
    ], VolumeVolumeInfoReadingModes.prototype, "text", void 0);
    return VolumeVolumeInfoReadingModes;
}(SpeakeasyBase));
export { VolumeVolumeInfoReadingModes };
// VolumeVolumeInfo
/**
 * General volume information.
**/
var VolumeVolumeInfo = /** @class */ (function (_super) {
    __extends(VolumeVolumeInfo, _super);
    function VolumeVolumeInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowAnonLogging" }),
        __metadata("design:type", Boolean)
    ], VolumeVolumeInfo.prototype, "allowAnonLogging", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authors" }),
        __metadata("design:type", Array)
    ], VolumeVolumeInfo.prototype, "authors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=averageRating" }),
        __metadata("design:type", Number)
    ], VolumeVolumeInfo.prototype, "averageRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canonicalVolumeLink" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfo.prototype, "canonicalVolumeLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=categories" }),
        __metadata("design:type", Array)
    ], VolumeVolumeInfo.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comicsContent" }),
        __metadata("design:type", Boolean)
    ], VolumeVolumeInfo.prototype, "comicsContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentVersion" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfo.prototype, "contentVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfo.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions" }),
        __metadata("design:type", VolumeVolumeInfoDimensions)
    ], VolumeVolumeInfo.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=imageLinks" }),
        __metadata("design:type", VolumeVolumeInfoImageLinks)
    ], VolumeVolumeInfo.prototype, "imageLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=industryIdentifiers", elemType: VolumeVolumeInfoIndustryIdentifiers }),
        __metadata("design:type", Array)
    ], VolumeVolumeInfo.prototype, "industryIdentifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=infoLink" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfo.prototype, "infoLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfo.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mainCategory" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfo.prototype, "mainCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maturityRating" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfo.prototype, "maturityRating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageCount" }),
        __metadata("design:type", Number)
    ], VolumeVolumeInfo.prototype, "pageCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=panelizationSummary" }),
        __metadata("design:type", VolumeVolumeInfoPanelizationSummary)
    ], VolumeVolumeInfo.prototype, "panelizationSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previewLink" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfo.prototype, "previewLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=printType" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfo.prototype, "printType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=printedPageCount" }),
        __metadata("design:type", Number)
    ], VolumeVolumeInfo.prototype, "printedPageCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publishedDate" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfo.prototype, "publishedDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=publisher" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfo.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ratingsCount" }),
        __metadata("design:type", Number)
    ], VolumeVolumeInfo.prototype, "ratingsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=readingModes" }),
        __metadata("design:type", VolumeVolumeInfoReadingModes)
    ], VolumeVolumeInfo.prototype, "readingModes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=samplePageCount" }),
        __metadata("design:type", Number)
    ], VolumeVolumeInfo.prototype, "samplePageCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=seriesInfo" }),
        __metadata("design:type", Volumeseriesinfo)
    ], VolumeVolumeInfo.prototype, "seriesInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subtitle" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfo.prototype, "subtitle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], VolumeVolumeInfo.prototype, "title", void 0);
    return VolumeVolumeInfo;
}(SpeakeasyBase));
export { VolumeVolumeInfo };
var Volume = /** @class */ (function (_super) {
    __extends(Volume, _super);
    function Volume() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessInfo" }),
        __metadata("design:type", VolumeAccessInfo)
    ], Volume.prototype, "accessInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Volume.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Volume.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Volume.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=layerInfo" }),
        __metadata("design:type", VolumeLayerInfo)
    ], Volume.prototype, "layerInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=recommendedInfo" }),
        __metadata("design:type", VolumeRecommendedInfo)
    ], Volume.prototype, "recommendedInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saleInfo" }),
        __metadata("design:type", VolumeSaleInfo)
    ], Volume.prototype, "saleInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=searchInfo" }),
        __metadata("design:type", VolumeSearchInfo)
    ], Volume.prototype, "searchInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Volume.prototype, "selfLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userInfo" }),
        __metadata("design:type", VolumeUserInfo)
    ], Volume.prototype, "userInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=volumeInfo" }),
        __metadata("design:type", VolumeVolumeInfo)
    ], Volume.prototype, "volumeInfo", void 0);
    return Volume;
}(SpeakeasyBase));
export { Volume };

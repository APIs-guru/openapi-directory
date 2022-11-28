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
var GetBusinessCurrentAccountsHeaders = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccountsHeaders, _super);
    function GetBusinessCurrentAccountsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccountsHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccountsHeaders.prototype, "ifNoneMatch", void 0);
    return GetBusinessCurrentAccountsHeaders;
}(SpeakeasyBase));
export { GetBusinessCurrentAccountsHeaders };
export var GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum;
(function (GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum) {
    GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum["YouHaveSentARequestWhichCouldNotBeUnderstood"] = "You have sent a request which could not be understood.";
})(GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum || (GetBusinessCurrentAccounts400ErrorObjectDescriptionEnum = {}));
export var GetBusinessCurrentAccounts400ErrorObjectStatusEnum;
(function (GetBusinessCurrentAccounts400ErrorObjectStatusEnum) {
    GetBusinessCurrentAccounts400ErrorObjectStatusEnum["FourHundred"] = "400";
})(GetBusinessCurrentAccounts400ErrorObjectStatusEnum || (GetBusinessCurrentAccounts400ErrorObjectStatusEnum = {}));
export var GetBusinessCurrentAccounts400ErrorObjectTitleEnum;
(function (GetBusinessCurrentAccounts400ErrorObjectTitleEnum) {
    GetBusinessCurrentAccounts400ErrorObjectTitleEnum["BadRequest"] = "Bad request";
})(GetBusinessCurrentAccounts400ErrorObjectTitleEnum || (GetBusinessCurrentAccounts400ErrorObjectTitleEnum = {}));
var GetBusinessCurrentAccounts400ErrorObject = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts400ErrorObject, _super);
    function GetBusinessCurrentAccounts400ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts400ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts400ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts400ErrorObject.prototype, "title", void 0);
    return GetBusinessCurrentAccounts400ErrorObject;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts400ErrorObject };
export var GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum;
(function (GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum) {
    GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum["YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred"] = "Your client has failed to submit a request, and a timeout has occurred.";
})(GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum || (GetBusinessCurrentAccounts408ErrorObjectDescriptionEnum = {}));
export var GetBusinessCurrentAccounts408ErrorObjectStatusEnum;
(function (GetBusinessCurrentAccounts408ErrorObjectStatusEnum) {
    GetBusinessCurrentAccounts408ErrorObjectStatusEnum["FourHundredAndEight"] = "408";
})(GetBusinessCurrentAccounts408ErrorObjectStatusEnum || (GetBusinessCurrentAccounts408ErrorObjectStatusEnum = {}));
export var GetBusinessCurrentAccounts408ErrorObjectTitleEnum;
(function (GetBusinessCurrentAccounts408ErrorObjectTitleEnum) {
    GetBusinessCurrentAccounts408ErrorObjectTitleEnum["ClientTimeout"] = "Client timeout";
})(GetBusinessCurrentAccounts408ErrorObjectTitleEnum || (GetBusinessCurrentAccounts408ErrorObjectTitleEnum = {}));
var GetBusinessCurrentAccounts408ErrorObject = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts408ErrorObject, _super);
    function GetBusinessCurrentAccounts408ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts408ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts408ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts408ErrorObject.prototype, "title", void 0);
    return GetBusinessCurrentAccounts408ErrorObject;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts408ErrorObject };
export var GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum;
(function (GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum) {
    GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum["YouHaveRequestedThisResourceTooOftenSlowDown"] = "You have requested this resource too often. Slow down.";
})(GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum || (GetBusinessCurrentAccounts429ErrorObjectDescriptionEnum = {}));
export var GetBusinessCurrentAccounts429ErrorObjectStatusEnum;
(function (GetBusinessCurrentAccounts429ErrorObjectStatusEnum) {
    GetBusinessCurrentAccounts429ErrorObjectStatusEnum["FourHundredAndTwentyNine"] = "429";
})(GetBusinessCurrentAccounts429ErrorObjectStatusEnum || (GetBusinessCurrentAccounts429ErrorObjectStatusEnum = {}));
export var GetBusinessCurrentAccounts429ErrorObjectTitleEnum;
(function (GetBusinessCurrentAccounts429ErrorObjectTitleEnum) {
    GetBusinessCurrentAccounts429ErrorObjectTitleEnum["TooManyRequests"] = "Too many requests";
})(GetBusinessCurrentAccounts429ErrorObjectTitleEnum || (GetBusinessCurrentAccounts429ErrorObjectTitleEnum = {}));
var GetBusinessCurrentAccounts429ErrorObject = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts429ErrorObject, _super);
    function GetBusinessCurrentAccounts429ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts429ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts429ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts429ErrorObject.prototype, "title", void 0);
    return GetBusinessCurrentAccounts429ErrorObject;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts429ErrorObject };
export var GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum;
(function (GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum) {
    GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum["AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable"] = "An error occurred on the server. No further information is available.";
})(GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum || (GetBusinessCurrentAccounts500ErrorObjectDescriptionEnum = {}));
export var GetBusinessCurrentAccounts500ErrorObjectStatusEnum;
(function (GetBusinessCurrentAccounts500ErrorObjectStatusEnum) {
    GetBusinessCurrentAccounts500ErrorObjectStatusEnum["FiveHundred"] = "500";
})(GetBusinessCurrentAccounts500ErrorObjectStatusEnum || (GetBusinessCurrentAccounts500ErrorObjectStatusEnum = {}));
export var GetBusinessCurrentAccounts500ErrorObjectTitleEnum;
(function (GetBusinessCurrentAccounts500ErrorObjectTitleEnum) {
    GetBusinessCurrentAccounts500ErrorObjectTitleEnum["InternalServerError"] = "Internal server error";
})(GetBusinessCurrentAccounts500ErrorObjectTitleEnum || (GetBusinessCurrentAccounts500ErrorObjectTitleEnum = {}));
var GetBusinessCurrentAccounts500ErrorObject = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts500ErrorObject, _super);
    function GetBusinessCurrentAccounts500ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts500ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts500ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts500ErrorObject.prototype, "title", void 0);
    return GetBusinessCurrentAccounts500ErrorObject;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts500ErrorObject };
export var GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum;
(function (GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum) {
    GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum["TheServiceIsTemporarilyUnavailable"] = "The service is temporarily unavailable.";
})(GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum || (GetBusinessCurrentAccounts503ErrorObjectDescriptionEnum = {}));
export var GetBusinessCurrentAccounts503ErrorObjectStatusEnum;
(function (GetBusinessCurrentAccounts503ErrorObjectStatusEnum) {
    GetBusinessCurrentAccounts503ErrorObjectStatusEnum["FiveHundredAndThree"] = "503";
})(GetBusinessCurrentAccounts503ErrorObjectStatusEnum || (GetBusinessCurrentAccounts503ErrorObjectStatusEnum = {}));
export var GetBusinessCurrentAccounts503ErrorObjectTitleEnum;
(function (GetBusinessCurrentAccounts503ErrorObjectTitleEnum) {
    GetBusinessCurrentAccounts503ErrorObjectTitleEnum["ServiceTemporarilyUnavailable"] = "Service temporarily unavailable";
})(GetBusinessCurrentAccounts503ErrorObjectTitleEnum || (GetBusinessCurrentAccounts503ErrorObjectTitleEnum = {}));
var GetBusinessCurrentAccounts503ErrorObject = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts503ErrorObject, _super);
    function GetBusinessCurrentAccounts503ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts503ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts503ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts503ErrorObject.prototype, "title", void 0);
    return GetBusinessCurrentAccounts503ErrorObject;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts503ErrorObject };
var GetBusinessCurrentAccountsErrorObject = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccountsErrorObject, _super);
    function GetBusinessCurrentAccountsErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccountsErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccountsErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccountsErrorObject.prototype, "title", void 0);
    return GetBusinessCurrentAccountsErrorObject;
}(SpeakeasyBase));
export { GetBusinessCurrentAccountsErrorObject };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum["Atm"] = "ATM";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum["Branch"] = "Branch";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum["BusinessCommercialCentre"] = "BusinessCommercialCentre";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum["CallCentre"] = "CallCentre";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum["MobileApps"] = "MobileApps";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum["MobileBanking"] = "MobileBanking";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum["Online"] = "Online";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum["Phone"] = "Phone";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum["Post"] = "Post";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum["PostOffice"] = "PostOffice";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum["RelationshipManager"] = "RelationshipManager";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum["Text"] = "Text";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountAccessChannelsEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["CashDeposit"] = "CashDeposit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["Deposit"] = "Deposit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["DirectDebit"] = "DirectDebit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["InitialDeposit"] = "InitialDeposit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["InternetLogon"] = "InternetLogon";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["MobileLogon"] = "MobileLogon";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["RegularDeposit"] = "RegularDeposit";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail
/**
 * Benefit detail
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitDescription" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitID" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitName" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitValue" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Counter" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "counter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CriteriaType" }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "criteriaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultToAccounts" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "defaultToAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumCriteria" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "maximumCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumCriteria" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "minimumCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PromotionEndDate" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "promotionEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PromotionStartDate" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "promotionStartDate", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem
/**
 * Benefit Item
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitDetail", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItemBenefitDetail }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem.prototype, "benefitDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum["Promotional"] = "Promotional";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum["Regular"] = "Regular";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitSubTypeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup
/**
 * Benefit Interest Group
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitItem" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroupBenefitItem)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup.prototype, "benefitItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitSubType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup.prototype, "benefitSubType", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits
/**
 * Benefit
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Benefit" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits.prototype, "benefit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitGroup", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefitsBenefitGroup }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits.prototype, "benefitGroup", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem
/**
 * Card Pricing
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateAdjustment" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem.prototype, "exchangeRateAdjustment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingProductStateEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingProductStateEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingProductStateEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingProductStateEnum["Promotional"] = "Promotional";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingProductStateEnum["Regular"] = "Regular";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingProductStateEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingProductStateEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing
/**
 * Card Price
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CAPricingItem" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricingCaPricingItem)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing.prototype, "caPricingItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductState" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing.prototype, "productState", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum["BasicCard"] = "BasicCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum["BusinessQuickLodgeCard"] = "BusinessQuickLodgeCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum["Cashcard"] = "Cashcard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum["ContactlessCashcard"] = "ContactlessCashcard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum["ContactlessDebitMastercard"] = "ContactlessDebitMastercard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum["ContactlessDebitVisa"] = "ContactlessDebitVisa";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum["DebitMastercard"] = "DebitMastercard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum["VisaDebit"] = "VisaDebit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum["DepositCard"] = "DepositCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum["OperatorCard"] = "OperatorCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum["PocaCard"] = "POCACard";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCardTypeEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["Daily"] = "Daily";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["Weekly"] = "Weekly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["Monthly"] = "Monthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["Yearly"] = "Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["Overnight"] = "Overnight";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum["Banded"] = "Banded";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum["Tiered"] = "Tiered";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum["Whole"] = "Whole";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum["Fixed"] = "Fixed";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum["Variable"] = "Variable";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum["Apr"] = "APR";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum["Aer"] = "AER";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum["Gross"] = "Gross";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum["Net"] = "Net";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum["RepApr"] = "RepApr";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers
/**
 * Credit Interest Tiers
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=APRAERRate" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "apraerRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DailyChargeForMaximum" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "dailyChargeForMaximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DailyChargeForMinimum" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "dailyChargeForMinimum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InterestTier" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "interestTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rate" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateComparisonType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "rateComparisonType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMaximum" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "tierValueMaximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMinimum" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "tierValueMinimum", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum["Compound"] = "Compound";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum["PayAway"] = "PayAway";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum["SelfCredit"] = "SelfCredit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum["SimpleInterest"] = "SimpleInterest";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem
/**
 * Credit Interest item
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationMethod" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem.prototype, "calculationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FixedInterestLength" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem.prototype, "fixedInterestLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InterestNotes" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem.prototype, "interestNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InterestRateType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem.prototype, "interestRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InterestTiers", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItemInterestTiers }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem.prototype, "interestTiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentMethod" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem.prototype, "paymentMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum["Promotional"] = "Promotional";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum["Regular"] = "Regular";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupInterestTierSubTypeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup
/**
 * Credit Interest Group
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditInterestItem" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroupCreditInterestItem)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup.prototype, "creditInterestItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InterestTierSubType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup.prototype, "interestTierSubType", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest
/**
 * Credit Interest
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditCharged" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest.prototype, "creditCharged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditInterestGroup", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterestCreditInterestGroup }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest.prototype, "creditInterestGroup", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum["Hard"] = "Hard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum["Soft"] = "Soft";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum["Hard"] = "Hard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum["Soft"] = "Soft";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["AnyBusinessCustomer"] = "AnyBusinessCustomer";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["BusinessOnly"] = "BusinessOnly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["CreditCard"] = "CreditCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["CreditScoring"] = "CreditScoring";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["EmailAddress"] = "EmailAddress";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["ExistingCustomers"] = "ExistingCustomers";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["IdAndV"] = "IdAndV";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["Mortgage"] = "Mortgage";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["NoArrearsOnLoan"] = "NoArrearsOnLoan";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["NoCustomerInArrears"] = "NoCustomerInArrears";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["NoOverOverdraftThirtyDays"] = "NoOverOverdraftThirtyDays";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["NoSoleUkAccountOrBankrupt"] = "NoSoleUkAccountOrBankrupt";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["Ntb"] = "NTB";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["NtbBusiness"] = "NTBBusiness";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["SoleStudentAccount"] = "SoleStudentAccount";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["SoleUkAccount"] = "SoleUkAccount";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["StudentsOnly"] = "StudentsOnly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["TwoMonthsOfCourseStart"] = "TwoMonthsOfCourseStart";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum["UcasFulltimeTwoYears"] = "UCASFulltimeTwoYears";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityEligibilityTypeEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum["ExistingCustomers"] = "ExistingCustomers";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum["NewCustomersOnly"] = "NewCustomersOnly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum["SwitchersOnly"] = "SwitchersOnly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum["StartUp"] = "StartUp";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMarketingEligibilityEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum["HalfYearly"] = "HalfYearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum["Monthly"] = "Monthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum["Quarterly"] = "Quarterly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum["Weekly"] = "Weekly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum["Yearly"] = "Yearly";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityMinimumIncomeFrequencyEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum["Uk"] = "UK";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum["Eea"] = "EEA";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum["Eu"] = "EU";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum["Efta"] = "EFTA";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum["GbEng"] = "GB - ENG";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum["GbNir"] = "GB - NIR";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum["GbSct"] = "GB - SCT";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum["GbWls"] = "GB - WLS";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum["Irl"] = "IRL";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilityResidencyRestrictedRegionEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum["Joint"] = "Joint";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum["SoleIncome"] = "SoleIncome";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum["SoleOrJoint"] = "SoleOrJoint";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum["Turnover"] = "Turnover";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibilitySingleJointIncomeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility
/**
 * Eligibility
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgeRestricted" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "ageRestricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnnualBusinessTurnover" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "annualBusinessTurnover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnnualBusinessTurnoverCurrency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "annualBusinessTurnoverCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibilityName" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "eligibilityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibilityNotes" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "eligibilityNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibilityType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "eligibilityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncomeCondition" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "incomeCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncomeTurnoverRelated" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "incomeTurnoverRelated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MarketingEligibility" }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "marketingEligibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxNumberOfAccounts" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "maxNumberOfAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumAge" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "maximumAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumAgeToOpen" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "maximumAgeToOpen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumOpeningAmount" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "maximumOpeningAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinIncomeTurnoverPaidIntoAccount" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "minIncomeTurnoverPaidIntoAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumAge" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "minimumAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumDeposit" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "minimumDeposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumIncomeFrequency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "minimumIncomeFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumIncomeTurnoverAmount" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "minimumIncomeTurnoverAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumIncomeTurnoverCurrency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "minimumIncomeTurnoverCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalance" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "minimumOperatingBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalanceCurrency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "minimumOperatingBalanceCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalanceExists" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "minimumOperatingBalanceExists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMaximumAmount" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "openingDepositMaximumAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMaximumCurrency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "openingDepositMaximumCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMinimum" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "openingDepositMinimum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMinimumCurrency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "openingDepositMinimumCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFinancialHoldingRequired" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "otherFinancialHoldingRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousBankruptcy" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "previousBankruptcy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResidencyRestricted" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "residencyRestricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResidencyRestrictedRegion" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "residencyRestrictedRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SingleJointIncome" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "singleJointIncome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThirdSectorOrganisations" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility.prototype, "thirdSectorOrganisations", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum["Promotional"] = "Promotional";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum["Regular"] = "Regular";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetailsFeatureSubTypeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails
/**
 * Feature Details
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CriteriaType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails.prototype, "criteriaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureDescription" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails.prototype, "featureDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureName" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails.prototype, "featureName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureSubType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails.prototype, "featureSubType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails.prototype, "featureType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureValue" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails.prototype, "featureValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum["Promotional"] = "Promotional";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum["Regular"] = "Regular";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureProductStateEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature
/**
 * Account Features
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExistingFeature" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature.prototype, "existingFeature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureDetails", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeatureFeatureDetails }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature.prototype, "featureDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductState" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature.prototype, "productState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["AccountClosing"] = "AccountClosing";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["AccountOpening"] = "AccountOpening";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["AtTimeOfLoanRepayment"] = "AtTimeOfLoanRepayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Daily"] = "Daily";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["EveryFiveBusinessDays"] = "EveryFiveBusinessDays";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Item"] = "Item";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Monthly"] = "Monthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["OnAccountAnniversary"] = "OnAccountAnniversary";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerHour"] = "PerHour";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerSheet"] = "PerSheet";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Quarterly"] = "Quarterly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["SixMonthly"] = "SixMonthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["StartOfLoan"] = "StartOfLoan";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Weekly"] = "Weekly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Yearly"] = "Yearly";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails
/**
 * Fee Sub Details
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeFrequency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeHigherTier" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeHigherTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeLowerTier" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeLowerTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeMax" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeMin" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeesAndChargesNotes" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feesAndChargesNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Negotiable" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "negotiable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepresentativeRate" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "representativeRate", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["Other"] = "Other";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmDonation"] = "ATMDonation";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmDeposAtmPaidIn"] = "ATMDeposATMPaidIn";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCertBalance"] = "ReportCertBalance";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadConVisaCredit"] = "ATMAbroadConVisaCredit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadConVisaDebit"] = "ATMAbroadConVisaDebit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCardnetEnvIn"] = "ATMCardnetEnvIn";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCashGroupAtmCreditCard"] = "ATMCashGroupATMCreditCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCashNonGroupAtmCredittcard"] = "ATMCashNonGroupATMCredittcard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCashGroupAtmDebitCard"] = "ATMCashGroupATMDebitCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCashNonGroupAtmDebitcard"] = "ATMCashNonGroupATMDebitcard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmConGroupAtm"] = "ATMConGroupATM";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroad"] = "ATMAbroad";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmForeignCashDebCard"] = "ATMForeignCashDebCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadGoldVisaDebit"] = "ATMAbroadGoldVisaDebit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmSpainCashCard"] = "ATMSpainCashCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmSpainDebitCard"] = "ATMSpainDebitCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmSpainConversionDebitCard"] = "ATMSpainConversionDebitCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmSpainConversionCashCard"] = "ATMSpainConversionCashCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmNonSterlingWithdrawal"] = "ATMNonSterlingWithdrawal";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadVisaCredit"] = "ATMAbroadVisaCredit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadVisaDebit"] = "ATMAbroadVisaDebit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadConVisaGoldDebit"] = "ATMAbroadConVisaGoldDebit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmWidthdrawCash"] = "ATMWidthdrawCash";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineAncilliary"] = "BACSOnLineAncilliary";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsBatch"] = "BACSBatch";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineFile"] = "BACSOnLineFile";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsFileItem"] = "BACSFileItem";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineSetup"] = "BACSOnLineSetup ";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsItem"] = "BACSItem";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsItemInterbranch"] = "BACSItemInterbranch";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsBulkBatch"] = "BACSBulkBatch";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineOverlimit"] = "BACSOnLineOverlimit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLinePayment"] = "BACSOnLinePayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsRecallItem"] = "BACSRecallItem";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineService"] = "BACSOnLineService";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsBulkInternet"] = "BACSBulkInternet";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebSmartCard"] = "BACSTELDirDebSmartCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebWebInit"] = "BACSTELDirDebWebInit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsteLirDebWebInit"] = "BACSTELirDebWebInit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebOverlimit"] = "BACSTELDirDebOverlimit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebPayment"] = "BACSTELDirDebPayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebService"] = "BACSTELDirDebService";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebAncilliary"] = "BACSTELDirDebAncilliary";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsDirectItemProfile"] = "BACSDirectItemProfile";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelAncilliary"] = "BACSTELAncilliary";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelSmartCard"] = "BACSTELSmartCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelFile"] = "BACSTELFile";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelSetup"] = "BACSTELSetup ";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelOverlimit"] = "BACSTELOverlimit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelPayment"] = "BACSTELPayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelService"] = "BACSTELService";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutBranch"] = "CHAPSOutBranch";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsCancellation"] = "CHAPSCancellation";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutOnlineDepositAcc"] = "CHAPSOutOnlineDepositAcc";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsIn"] = "CHAPSIn";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutInterBank"] = "CHAPSOutInterBank";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsInterBank"] = "CHAPSInterBank";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutPost"] = "CHAPSOutPost";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutInterBranch"] = "CHAPSOutInterBranch";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOut"] = "CHAPSOut";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutOnline"] = "CHAPSOutOnline";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapSandForeignPay"] = "CHAPSandForeignPay";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutManual"] = "CHAPSOutManual";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CardCardReplacement"] = "CardCardReplacement";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsCounter"] = "DraftsCounter";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsBankers"] = "DraftsBankers";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsIntlPayableAbroad"] = "DraftsIntlPayableAbroad";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsLostStolen"] = "DraftsLostStolen";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CardPersonalisedCard"] = "CardPersonalisedCard";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsIntlStoppedCancelled"] = "DraftsIntlStoppedCancelled";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["EuroChqXLess"] = "EuroChqXLess";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["EuroChqXPlus"] = "EuroChqXPlus";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsOutFutureDated"] = "FPSOutFutureDated";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsOutImmediate"] = "FPSOutImmediate";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsOut"] = "FPSOut";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsOutOwn"] = "FPSOutOwn";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsInBranch"] = "FPSInBranch";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsukPayUrgent"] = "FPSUKPayUrgent";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalArticlesReport"] = "LegalArticlesReport";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalSealing"] = "LegalSealing";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalBondAndGuarantee"] = "LegalBondAndGuarantee";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalCourtOrder"] = "LegalCourtOrder";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalCoSearch"] = "LegalCoSearch";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalDepositAssignment"] = "LegalDepositAssignment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalGuaranteePrep"] = "LegalGuaranteePrep";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalLifePolicyPrepCo"] = "LegalLifePolicyPrepCo";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalLifePolicyPrepPersonal"] = "LegalLifePolicyPrepPersonal";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalPriorityPariPassu"] = "LegalPriorityPariPassu";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalSubordinationAgreement"] = "LegalSubordinationAgreement";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DirDebDirectDebitAdmin"] = "DirDebDirectDebitAdmin";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DirDebDirectDebitCancel"] = "DirDebDirectDebitCancel";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayBibForeignLimit"] = "IntlPayBIBForeignLimit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayCreditTransCust"] = "IntlPayCreditTransCust";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayCreditTransNonCust"] = "IntlPayCreditTransNonCust";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayUrgentPaymentForeign"] = "IntlPayUrgentPaymentForeign";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayExpressMoneyMover"] = "IntlPayExpressMoneyMover";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayEeaPayUrgent"] = "IntlPayEEAPayUrgent";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayIrishPayUrgent"] = "IntlPayIrishPayUrgent";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayEeaPay"] = "IntlPayEEAPay";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignIn1CPlus"] = "IntlPayForeignIn1CPlus";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignPaymentInUkAcc"] = "IntlPayForeignPaymentInUKAcc";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignCharge"] = "IntlPayForeignCharge";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignCancellation"] = "IntlPayForeignCancellation";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignStandardEuEuroBic"] = "IntlPayForeignStandardEUEuroBIC";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxFeeRate"] = "IntlPayFXFeeRate";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignInternet"] = "IntlPayForeignInternet";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeign"] = "IntlPayForeign";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignInbound"] = "IntlPayForeignInbound";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxPaymentOut"] = "IntlPayFXPaymentOut";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignInSub1C"] = "IntlPayForeignInSub1C";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxRate"] = "IntlPayFXRate";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignStandardEuEuroNoBic"] = "IntlPayForeignStandardEUEuroNoBIC";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxPaymentOutIr"] = "IntlPayFXPaymentOutIR";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxFee"] = "IntlPayFXFee";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayPurchaseNonSterling"] = "IntlPayPurchaseNonSterling";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayPostPaymentForeign"] = "IntlPayPostPaymentForeign";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayPurchaseRateNonSterling"] = "IntlPayPurchaseRateNonSterling";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayPaymentTracing"] = "IntlPayPaymentTracing";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayStandardMoneyMover"] = "IntlPayStandardMoneyMover";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayMt101Transaction"] = "IntlPayMT101Transaction";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayTransNonSterling"] = "IntlPayTransNonSterling";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayTransRateNonSterling"] = "IntlPayTransRateNonSterling";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignUrgentEuEuroBic"] = "IntlPayForeignUrgentEUEuroBIC";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignUrgentEuEuroNoBic"] = "IntlPayForeignUrgentEUEuroNoBIC";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayUrgentPaymentGroup"] = "IntlPayUrgentPaymentGroup";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayUrgentPaymentUk"] = "IntlPayUrgentPaymentUK";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayUsaPayUrgent"] = "IntlPayUSAPayUrgent";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayCurrencyPurchase"] = "IntlPayCurrencyPurchase";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayWorldpayPayment"] = "IntlPayWorldpayPayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayCurrencyWithdraw"] = "IntlPayCurrencyWithdraw";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayBankDetailsWrong"] = "InvPayBankDetailsWrong";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayForeignBcnr"] = "InvPayForeignBCNR";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayForeignRecall"] = "InvPayForeignRecall";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvGeneralInq"] = "InvGeneralInq";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvOldInstruction"] = "InvOldInstruction";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayPaymentRecall"] = "InvPayPaymentRecall";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayReturnDebitXvLess"] = "InvPayReturnDebitXVLess";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayReturnDebitXvPlus"] = "InvPayReturnDebitXVPlus";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayStopPayment"] = "InvPayStopPayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayStandingOrdUnpaid"] = "InvPayStandingOrdUnpaid";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepAccess"] = "SafeKeepAccess";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepDeedMedium"] = "SafeKeepDeedMedium";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepingEnvelope"] = "SafeKeepingEnvelope";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepingInspection"] = "SafeKeepingInspection";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepingLargeItem"] = "SafeKeepingLargeItem";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepMultipleItems"] = "SafeKeepMultipleItems";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepingParcel"] = "SafeKeepingParcel";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepDeedSmall"] = "SafeKeepDeedSmall";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepOneItem"] = "SafeKeepOneItem";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepSafeCustody"] = "SafeKeepSafeCustody";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanArrangementFeePc"] = "LoanArrangementFeePC";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanArrangement"] = "LoanArrangement";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanEarlyRepayment"] = "LoanEarlyRepayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanLatePayment"] = "LoanLatePayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanSmeUnsecuredLoan"] = "LoanSMEUnsecuredLoan";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanTieredArrangement"] = "LoanTieredArrangement";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["NightSafeNightSafeBankOpen"] = "NightSafeNightSafeBankOpen";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["NightSafeCreditSub5K"] = "NightSafeCreditSub5K";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["NightSafeNightSafe"] = "NightSafeNightSafe";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["NightSafeNightSafePaidIn"] = "NightSafeNightSafePaidIn";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OverdraftAnnualReview"] = "OverdraftAnnualReview";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OverdraftTempOverdraft"] = "OverdraftTempOverdraft";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OverdraftUnauthorisedBorrowing"] = "OverdraftUnauthorisedBorrowing";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["PoPostOfficeCounterCredit"] = "POPostOfficeCounterCredit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["PoPostOfficeCashCredit"] = "POPostOfficeCashCredit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["PoPostOfficeCashOut"] = "POPostOfficeCashOut";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["PoPostOfficeWithdrawal"] = "POPostOfficeWithdrawal";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqBookTheftLossAllStopped"] = "ChqBookTheftLossAllStopped";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqIssuedCurrencyAcc"] = "ChqIssuedCurrencyAcc";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqCopy"] = "ChqCopy";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqDraft"] = "ChqDraft";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqIn"] = "ChqIn";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqDraftSterling"] = "ChqDraftSterling";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqOutIssued"] = "ChqOutIssued";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqSpecialChqPresentation"] = "ChqSpecialChqPresentation";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqCounterCheque"] = "ChqCounterCheque";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqChequeswithStatement"] = "ChqChequeswithStatement";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqStopped"] = "ChqStopped";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqTrans"] = "ChqTrans";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqDraftFx"] = "ChqDraftFX";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignCourier"] = "ChqForeignCourier";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegTenThou"] = "ChqForeignNegTenThou";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegHundred"] = "ChqForeignNegHundred";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChequeForeignBankDivi"] = "ChequeForeignBankDivi";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegFiftyThou"] = "ChqForeignNegFiftyThou";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqPensionCheque"] = "ChqPensionCheque";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChequeForeignOtherDivi"] = "ChequeForeignOtherDivi";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegFiveThou"] = "ChqForeignNegFiveThou";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegMax"] = "ChqForeignNegMax";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignGbpmmdPlus"] = "ChqForeignGBPMMDPlus";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqGiftCheque"] = "ChqGiftCheque";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqCounterLodgement"] = "ChqCounterLodgement";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqCashDropLodgement"] = "ChqCashDropLodgement";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqChequePhotocopy"] = "ChqChequePhotocopy";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqPostOfficeCredit"] = "ChqPostOfficeCredit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqPostOfficeChequeCollected"] = "ChqPostOfficeChequeCollected";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqChequeRetrieval"] = "ChqChequeRetrieval";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqReconcilliationPerTrans"] = "ChqReconcilliationPerTrans";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqSpecialPresentationCount"] = "ChqSpecialPresentationCount";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqSpecialPresentationPtt"] = "ChqSpecialPresentationPTT";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqUnpaidCharge"] = "ChqUnpaidCharge";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqUnpaidTransIn"] = "ChqUnpaidTransIn";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqUnpaidTransOut"] = "ChqUnpaidTransOut";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqUnpaidCheque"] = "ChqUnpaidCheque";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportAuditLetter"] = "ReportAuditLetter";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportFaxAdviceAdditional"] = "ReportFAXAdviceAdditional";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportTelAdviceAdditional"] = "ReportTelAdviceAdditional";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCreditHistory"] = "ReportCreditHistory";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCertInterestDuplicate"] = "ReportCertInterestDuplicate";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCertInterest"] = "ReportCertInterest";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCreditHistoryAdditionalInYear"] = "ReportCreditHistoryAdditionalInYear";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportForeignStatusEnqElec"] = "ReportForeignStatusEnqElec";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportForeignStatusEnq"] = "ReportForeignStatusEnq";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCashBackorInterestAnal"] = "ReportCashBackorInterestAnal";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementChqDaily"] = "ReportStatementChqDaily";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementChqFortnightly"] = "ReportStatementChqFortnightly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementChqMonthly"] = "ReportStatementChqMonthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementChqWeekly"] = "ReportStatementChqWeekly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementAndDiviChq"] = "ReportStatementAndDiviChq";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportReference"] = "ReportReference";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportReferralItem"] = "ReportReferralItem";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementByAtm"] = "ReportStatementByATM";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementByBranch"] = "ReportStatementByBranch";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementCopyRegular"] = "ReportStatementCopyRegular";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatusEnquiry"] = "ReportStatusEnquiry";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementFrequent"] = "ReportStatementFrequent";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementMonthly"] = "ReportStatementMonthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementCopy1"] = "ReportStatementCopy1";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementToBranch"] = "ReportStatementToBranch";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportSmsTextMiniStatementorAlert"] = "ReportSMSTextMiniStatementorAlert";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementFortnightly"] = "ReportStatementFortnightly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportSmsTextMiniStatementWoM"] = "ReportSMSTextMiniStatementWoM";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportSmsTextAlertBalance"] = "ReportSMSTextAlertBalance";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportSmsTextAlert"] = "ReportSMSTextAlert";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportTaxCert"] = "ReportTaxCert";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportWeeklyStatement"] = "ReportWeeklyStatement";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportTextMessageBanking"] = "ReportTextMessageBanking";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaCancellation"] = "SEPACancellation";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaBranch"] = "SEPABranch";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaCredit"] = "SEPACredit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaDirectDebit"] = "SEPADirectDebit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaIn"] = "SEPAIn";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaEuro"] = "SEPAEuro";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaOut"] = "SEPAOut";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaUnpaid"] = "SEPAUnpaid";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaWinbitsAnnualService"] = "SEPAWinbitsAnnual Service";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaWinbitsTransaction"] = "SEPAWinbitsTransaction";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBillPaymentBranch"] = "TransBillPaymentBranch";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBillCollect"] = "TransBillCollect";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTelephoneBillPayment"] = "TransTelephoneBillPayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBankPayment"] = "TransBankPayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBillPaymentTelephone"] = "TransBillPaymentTelephone";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCorrespondentBankFee"] = "TransCorrespondentBankFee";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCreditTransferUkDifferent"] = "TransCreditTransferUKDifferent";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCreditTransferUkSame"] = "TransCreditTransferUKSame";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCredit"] = "TransCredit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCreditTransfer"] = "TransCreditTransfer";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBranchCredit"] = "TransBranchCredit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransDebit"] = "TransDebit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransDebCardDeb"] = "TransDebCardDeb";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransUkDirDeb"] = "TransUKDirDeb";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransManualDeb"] = "TransManualDeb";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBuyForeignWithGbp"] = "TransBuyForeignWithGBP";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransGoodValueReq"] = "TransGoodValueReq";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransSwiftOutUkForeign"] = "TransSWIFTOutUKForeign";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransInconpleteInstruction"] = "TransInconpleteInstruction";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransManualEntries"] = "TransManualEntries";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransManualTrans"] = "TransManualTrans";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransNonSterling"] = "TransNonSterling";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransPosSaleForeign"] = "TransPOSSaleForeign";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransPriPaymentPost"] = "TransPriPaymentPost";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransPosSaleUk"] = "TransPOSSaleUK";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransReturnPayment"] = "TransReturnPayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransReconciliationPerTrans"] = "TransReconciliationPerTrans";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransStandingOrdAdmin"] = "TransStandingOrdAdmin";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransStandingOrd"] = "TransStandingOrd";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransStandingOrdManPay"] = "TransStandingOrdManPay";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTravellersChqOtherBank"] = "TransTravellersChqOtherBank";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTelBusiPriPaymentForeignToUkAcc"] = "TransTelBusiPriPaymentForeignToUKAcc";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTeleItem"] = "TransTeleItem";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTelBusiPriPaymentToGrpAcc"] = "TransTelBusiPriPaymentToGrpAcc";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTravellersChqRate"] = "TransTravellersChqRate";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTransferExGroup"] = "TransTransferExGroup";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransUnauthorisedPaidTrans"] = "TransUnauthorisedPaidTrans";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransUrgentPaymentPostal"] = "TransUrgentPaymentPostal";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransUnpaidTrans"] = "TransUnpaidTrans";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTelBusiPriPaymentToNonGrpAcc"] = "TransTelBusiPriPaymentToNonGrpAcc";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransSwiftOutNonEeaSterling"] = "TransSWIFTOutNonEEASterling";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoAutoCredit"] = "AutoAutoCredit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoAutomatedEntries"] = "AutoAutomatedEntries";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoAutoCreditPhoneInet"] = "AutoAutoCreditPhoneInet";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoAutomatedTrans"] = "AutoAutomatedTrans";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoDebitCardCommercial"] = "AutoDebitCardCommercial";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoFpsAutoCredit"] = "AutoFPSAutoCredit";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["VisaConvertAbroadForeign"] = "VisaConvertAbroadForeign";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["VisaBureauDeChange"] = "VisaBureauDeChange";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["VisaTravellersChqorCurrency"] = "VisaTravellersChqorCurrency";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInternetBillPayment"] = "OnlineInternetBillPayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBusinessOnlineEuroPayment"] = "OnlineBusinessOnlineEuroPayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBusinessOnlineUrgentEuroPayment"] = "OnlineBusinessOnlineUrgentEuroPayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBusinessOnlineForeignPayment"] = "OnlineBusinessOnlineForeignPayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInterbankTransfer"] = "OnlineInterbankTransfer";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInterbankPerTransfer"] = "OnlineInterbankPerTransfer";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInterbranchTransfer"] = "OnlineInterbranchTransfer";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInterbranchPerTransfer"] = "OnlineInterbranchPerTransfer";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineSubscriptionMonthly"] = "OnlineSubscriptionMonthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBankingPayment"] = "OnlineBankingPayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBankingSubscription"] = "OnlineBankingSubscription";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePosSale"] = "OnlinePOSSale";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustAncillarys"] = "OnlinePersonalCustAncillarys";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustService"] = "OnlinePersonalCustService";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustOverlimits"] = "OnlinePersonalCustOverlimits";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineReplacementCardReader"] = "OnlineReplacementCardReader";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustSetUp"] = "OnlinePersonalCustSetUp";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustTransaction"] = "OnlinePersonalCustTransaction";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePaymentinGbPtoUk"] = "OnlinePaymentinGBPtoUK";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineUrgentPayment"] = "OnlineUrgentPayment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePaymentinUsDtoUs"] = "OnlinePaymentinUSDtoUS";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBulkDirectDebSterling"] = "OnlineBulkDirectDebSterling";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqSent"] = "ForeignChqSent";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqSelf"] = "ForeignChqSelf";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqEncashment"] = "ForeignChqEncashment";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxInwardsCust"] = "ForeignFXInwardsCust";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxTransfersRoi"] = "ForeignFXTransfersROI";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxForwardTrans"] = "ForeignFXForwardTrans";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxTransfersBoi"] = "ForeignFXTransfersBOI";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignExMaintenance"] = "ForeignExMaintenance";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxInwardsNonCust"] = "ForeignFXInwardsNonCust";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxOutwards"] = "ForeignFXOutwards";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignPurchase"] = "ForeignPurchase";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignStatusRep"] = "ForeignStatusRep";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqDraft"] = "ForeignChqDraft";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqCLess"] = "ForeignChqCLess";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqMLess"] = "ForeignChqMLess";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqOther"] = "ForeignChqOther";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqMPlus"] = "ForeignChqMPlus";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqCcc"] = "ForeignChqCCC";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCAccountFee"] = "ServiceCAccountFee";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCAccountFeeMonthly"] = "ServiceCAccountFeeMonthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCAccountFeeQuarterly"] = "ServiceCAccountFeeQuarterly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCBalanceHandling"] = "ServiceCBalanceHandling";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCFixedTariff"] = "ServiceCFixedTariff";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCBusiDepAccBreakage"] = "ServiceCBusiDepAccBreakage";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCMonitorDaily"] = "ServiceCMonitorDaily";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCManagementFee"] = "ServiceCManagementFee";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCMinimumMonthlyFee"] = "ServiceCMinimumMonthlyFee";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCMonitorMonthly"] = "ServiceCMonitorMonthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCMonitorWeekly"] = "ServiceCMonitorWeekly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCSecurityFee"] = "ServiceCSecurityFee";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCmt940AccountFirst"] = "ServiceCMT940AccountFirst";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCmt940AccountSubsequent"] = "ServiceCMT940AccountSubsequent";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCOther"] = "ServiceCOther";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCoinHandling"] = "CounterCoinHandling";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashIn"] = "CounterCashIn";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashInNotUs"] = "CounterCashInNotUs";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashOut"] = "CounterCashOut";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashX"] = "CounterCashX";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterForeignCashMax"] = "CounterForeignCashMax";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterForeignNoteHandling"] = "CounterForeignNoteHandling";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterForeignCashOut"] = "CounterForeignCashOut";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashFeeRate"] = "CounterCashFeeRate";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterForeignCashOutTx"] = "CounterForeignCashOutTx";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCounterLodgement"] = "CounterCounterLodgement";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashDropLodgement"] = "CounterCashDropLodgement";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterNotesLodged"] = "CounterNotesLodged";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterNotesOut"] = "CounterNotesOut";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashInOwn"] = "CounterCashInOwn";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterPaidTrans"] = "CounterPaidTrans";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashFeePercent"] = "CounterCashFeePercent";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail
/**
 * Fee Detail
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeSubDetails" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "feeSubDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Other" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "other", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum["Promotional"] = "Promotional";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum["Regular"] = "Regular";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeSubTypeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails
/**
 * Fee Details
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeDetail" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetailsFeeDetail)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails.prototype, "feeDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeSubType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails.prototype, "feeSubType", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees
/**
 * Fees
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeDetails", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFeesFeeDetails }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees.prototype, "feeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeHigherTier" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees.prototype, "feeHigherTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeLowerTier" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees.prototype, "feeLowerTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum["Promotional"] = "Promotional";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum["Regular"] = "Regular";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesProductStateEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges
/**
 * Fees And Charges
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Fees" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndChargesFees)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges.prototype, "fees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductState" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges.prototype, "productState", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum["AndroidPay"] = "AndroidPay";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum["ApplePay"] = "ApplePay";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum["IssuerMobileApp"] = "IssuerMobileApp";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum["MobileBankingApp"] = "MobileBankingApp";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum["Other"] = "Other";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum["PayM"] = "PayM";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum["SamsungPay"] = "SamsungPay";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum["VodafoneWallet"] = "VodafoneWallet";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountMobileWalletEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum["Uk"] = "UK";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum["Eu"] = "EU";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrandTrademarkIpoCodeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand
/**
 * Brand
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrademarkID" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand.prototype, "trademarkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrademarkIPOCode" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand.prototype, "trademarkIpoCode", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName
/**
 * Organisation Name
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LegalName" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName.prototype, "legalName", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation
/**
 * Parent organisation
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BIC" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation.prototype, "bic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LEI" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation.prototype, "lei", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganisationName" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisationOrganisationName)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation.prototype, "organisationName", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation
/**
 * Organisation
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Brand" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationBrand)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentOrganisation" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisationParentOrganisation)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation.prototype, "parentOrganisation", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum["No"] = "No";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum["Yes"] = "Yes";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeeChargeNegotiableIndicatorEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Daily"] = "Daily";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Weekly"] = "Weekly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Monthly"] = "Monthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Yearly"] = "Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Overnight"] = "Overnight";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Other"] = "Other";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Daily"] = "Daily";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Weekly"] = "Weekly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Monthly"] = "Monthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Yearly"] = "Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Overnight"] = "Overnight";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Other"] = "Other";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency
/**
 * Other Code Type
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "name", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency
/**
 * Other Code Type
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "name", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType
/**
 * Other Code Type
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType.prototype, "name", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType
/**
 * Other Code Type
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType.prototype, "name", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum["Gross"] = "Gross";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum["Net"] = "Net";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum["Other"] = "Other";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateTypeEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum["Periodic"] = "Periodic";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum["Minimum"] = "Minimum";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum["Maximum"] = "Maximum";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum["Setup"] = "Setup";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum["Review"] = "Review";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum["Renewal"] = "Renewal";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum["MinimumSetup"] = "MinimumSetup";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum["MaximumSetup"] = "MaximumSetup";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum["Total"] = "Total";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum["Item"] = "Item";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum["EmergencyLending"] = "EmergencyLending";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum["Other"] = "Other";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeTypeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges
/**
 * Overdraft Fees Charges
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeAmount" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges.prototype, "feeChargeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeApplicationFrequency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges.prototype, "feeChargeApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeCalculationFrequency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges.prototype, "feeChargeCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherApplicationFrequency" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges.prototype, "feeChargeOtherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherCalculationFrequency" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges.prototype, "feeChargeOtherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherType" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeOtherType)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges.prototype, "feeChargeOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRate" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges.prototype, "feeChargeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRateOtherType" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndChargesFeeChargeRateOtherType)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges.prototype, "feeChargeRateOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRateType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges.prototype, "feeChargeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges.prototype, "feeChargeType", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum["Promotional"] = "Promotional";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum["Regular"] = "Regular";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftProductStateEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType
/**
 * Other Code Type
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType.prototype, "name", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum["Unarranged"] = "Unarranged";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum["Arranged"] = "Arranged";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum["Other"] = "Other";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementTypeEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Daily"] = "Daily";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Weekly"] = "Weekly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Monthly"] = "Monthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Yearly"] = "Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Overnight"] = "Overnight";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Other"] = "Other";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Daily"] = "Daily";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Weekly"] = "Weekly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Monthly"] = "Monthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Yearly"] = "Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Overnight"] = "Overnight";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Other"] = "Other";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency
/**
 * Other Code Type
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "name", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency
/**
 * Other Code Type
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "name", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType
/**
 * Other Code Type
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType.prototype, "name", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType
/**
 * Other Code Type
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType.prototype, "name", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum["Gross"] = "Gross";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum["Net"] = "Net";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum["Other"] = "Other";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Periodic"] = "Periodic";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Minimum"] = "Minimum";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Maximum"] = "Maximum";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Setup"] = "Setup";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Review"] = "Review";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Renewal"] = "Renewal";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["MinimumSetup"] = "MinimumSetup";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["MaximumSetup"] = "MaximumSetup";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Total"] = "Total";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Item"] = "Item";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["EmergencyLending"] = "EmergencyLending";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Other"] = "Other";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges
/**
 * Overdraft Fees Charges
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeAmount" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeApplicationFrequency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeCalculationFrequency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherApplicationFrequency" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeOtherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherCalculationFrequency" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeOtherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherType" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRate" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRateOtherType" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeRateOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRateType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeType", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Daily"] = "Daily";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Weekly"] = "Weekly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Monthly"] = "Monthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Yearly"] = "Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Overnight"] = "Overnight";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Other"] = "Other";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Daily"] = "Daily";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Weekly"] = "Weekly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Monthly"] = "Monthly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Yearly"] = "Yearly";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Overnight"] = "Overnight";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Other"] = "Other";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency
/**
 * Other Code Type
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "name", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency
/**
 * Other Code Type
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "name", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType
/**
 * Other Code Type
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType.prototype, "name", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType
/**
 * Other Code Type
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType.prototype, "name", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum["Gross"] = "Gross";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum["Net"] = "Net";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum["Other"] = "Other";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Periodic"] = "Periodic";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Minimum"] = "Minimum";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Maximum"] = "Maximum";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Setup"] = "Setup";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Review"] = "Review";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Renewal"] = "Renewal";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["MinimumSetup"] = "MinimumSetup";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["MaximumSetup"] = "MaximumSetup";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Total"] = "Total";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Item"] = "Item";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["EmergencyLending"] = "EmergencyLending";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Other"] = "Other";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges
/**
 * Overdraft Fees Charges
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeAmount" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeApplicationFrequency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeCalculationFrequency" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherApplicationFrequency" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeOtherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherCalculationFrequency" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeOtherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherType" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRate" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRateOtherType" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeRateOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRateType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeType", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand
/**
 * Tiers
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EAR" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "ear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "feesAndCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandIdentification" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "tierBandIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMaximum" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "tierValueMaximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMinimum" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "tierValueMinimum", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand };
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet
/**
 * Tier Bandset
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArrangementOtherType" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetArrangementOtherType)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet.prototype, "arrangementOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArrangementType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet.prototype, "arrangementType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BufferAmount" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet.prototype, "bufferAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CMADefinedIndicator" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet.prototype, "cmaDefinedIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EAR" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet.prototype, "ear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetFeesAndCharges }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet.prototype, "feesAndCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftTierBand", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSetOverdraftTierBand }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet.prototype, "overdraftTierBand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandSetIdentification" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet.prototype, "tierBandSetIdentification", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum["Committed"] = "Committed";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum["OnDemand"] = "OnDemand";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTypeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft
/**
 * Overdraft
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeNegotiableIndicator" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft.prototype, "feeChargeNegotiableIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftFeesAndCharges }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft.prototype, "feesAndCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumMonthlyOverdraftCharge" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft.prototype, "maximumMonthlyOverdraftCharge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftProductState" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft.prototype, "overdraftProductState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftTierBandSet", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraftOverdraftTierBandSet }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft.prototype, "overdraftTierBandSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft.prototype, "overdraftType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft.prototype, "stopPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Term" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft.prototype, "term", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum["Basic"] = "Basic";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum["Business"] = "Business";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum["General"] = "General";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum["Graduate"] = "Graduate";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum["International"] = "International";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum["Packaged"] = "Packaged";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum["Personal"] = "Personal";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum["Premium"] = "Premium";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum["Reward"] = "Reward";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum["Sme"] = "SME";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum["Student"] = "Student";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum["YoungAdult"] = "YoungAdult";
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum["Youth"] = "Youth";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductSegmentEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum["Bca"] = "BCA";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountProductTypeEnum = {}));
// GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount
/**
 * Business current account
**/
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessChannels" }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "accessChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Benefits" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountBenefits)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "benefits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CAPricing", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCaPricing }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "caPricing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CardNotes" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "cardNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CardType" }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "cardType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CardWithdrawalLimit" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "cardWithdrawalLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChequeBookAvailable" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "chequeBookAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Contactless" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "contactless", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditInterest" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountCreditInterest)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "creditInterest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningForGettingAnAccount" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "creditScoringPartOfAccountOpeningForGettingAnAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningForIDVerification" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "creditScoringPartOfAccountOpeningForIdVerification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore" }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "creditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningIDVerificationText" }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "creditScoringPartOfAccountOpeningIdVerificationText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore" }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningText" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "creditScoringPartOfAccountOpeningText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Eligibility" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountEligibility)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "eligibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Feature", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeature }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "feature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountFeesAndCharges }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "feesAndCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InternationalPaymentsSupported" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "internationalPaymentsSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumMonthlyCharge" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "maximumMonthlyCharge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MobileWallet" }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "mobileWallet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Organisation" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOrganisation)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "organisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Overdraft", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccountOverdraft }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "overdraft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftOffered" }),
        __metadata("design:type", Boolean)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "overdraftOffered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductDescription" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "productDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductIdentifier" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "productIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductName" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductSegment" }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "productSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductType" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductURL" }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "productUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TsandCs" }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount.prototype, "tsandCs", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount };
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum["UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions"] = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum["HttpsWwwOpenbankingOrgUkOpenLicence"] = "https://www.openbanking.org.uk/open-licence";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum = {}));
export var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
(function (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum) {
    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum["HttpsWwwOpenbankingOrgUkTerms"] = "https://www.openbanking.org.uk/terms";
})(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum || (GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum = {}));
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Agreement" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "agreement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdated" }),
        __metadata("design:type", Date)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=License" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TermsOfUse" }),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "termsOfUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalResults" }),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "totalResults", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData };
var GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson, _super);
    function GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonBusinessCurrentAccount }),
        __metadata("design:type", Array)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData)
    ], GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson.prototype, "meta", void 0);
    return GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson;
}(SpeakeasyBase));
export { GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson };
var GetBusinessCurrentAccountsRequest = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccountsRequest, _super);
    function GetBusinessCurrentAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBusinessCurrentAccountsHeaders)
    ], GetBusinessCurrentAccountsRequest.prototype, "headers", void 0);
    return GetBusinessCurrentAccountsRequest;
}(SpeakeasyBase));
export { GetBusinessCurrentAccountsRequest };
var GetBusinessCurrentAccountsResponse = /** @class */ (function (_super) {
    __extends(GetBusinessCurrentAccountsResponse, _super);
    function GetBusinessCurrentAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBusinessCurrentAccounts400ErrorObject)
    ], GetBusinessCurrentAccountsResponse.prototype, "fourHundredErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBusinessCurrentAccounts408ErrorObject)
    ], GetBusinessCurrentAccountsResponse.prototype, "fourHundredAndEightErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBusinessCurrentAccounts429ErrorObject)
    ], GetBusinessCurrentAccountsResponse.prototype, "fourHundredAndTwentyNineErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBusinessCurrentAccounts500ErrorObject)
    ], GetBusinessCurrentAccountsResponse.prototype, "fiveHundredErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBusinessCurrentAccounts503ErrorObject)
    ], GetBusinessCurrentAccountsResponse.prototype, "fiveHundredAndThreeErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetBusinessCurrentAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBusinessCurrentAccountsErrorObject)
    ], GetBusinessCurrentAccountsResponse.prototype, "errorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson)
    ], GetBusinessCurrentAccountsResponse.prototype, "getBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetBusinessCurrentAccountsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetBusinessCurrentAccountsResponse.prototype, "statusCode", void 0);
    return GetBusinessCurrentAccountsResponse;
}(SpeakeasyBase));
export { GetBusinessCurrentAccountsResponse };

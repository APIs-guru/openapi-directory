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
var GetPersonalCurrentAccountsHeaders = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccountsHeaders, _super);
    function GetPersonalCurrentAccountsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccountsHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccountsHeaders.prototype, "ifNoneMatch", void 0);
    return GetPersonalCurrentAccountsHeaders;
}(SpeakeasyBase));
export { GetPersonalCurrentAccountsHeaders };
export var GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum;
(function (GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum) {
    GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum["YouHaveSentARequestWhichCouldNotBeUnderstood"] = "You have sent a request which could not be understood.";
})(GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum || (GetPersonalCurrentAccounts400ErrorObjectDescriptionEnum = {}));
export var GetPersonalCurrentAccounts400ErrorObjectStatusEnum;
(function (GetPersonalCurrentAccounts400ErrorObjectStatusEnum) {
    GetPersonalCurrentAccounts400ErrorObjectStatusEnum["FourHundred"] = "400";
})(GetPersonalCurrentAccounts400ErrorObjectStatusEnum || (GetPersonalCurrentAccounts400ErrorObjectStatusEnum = {}));
export var GetPersonalCurrentAccounts400ErrorObjectTitleEnum;
(function (GetPersonalCurrentAccounts400ErrorObjectTitleEnum) {
    GetPersonalCurrentAccounts400ErrorObjectTitleEnum["BadRequest"] = "Bad request";
})(GetPersonalCurrentAccounts400ErrorObjectTitleEnum || (GetPersonalCurrentAccounts400ErrorObjectTitleEnum = {}));
var GetPersonalCurrentAccounts400ErrorObject = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts400ErrorObject, _super);
    function GetPersonalCurrentAccounts400ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts400ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts400ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts400ErrorObject.prototype, "title", void 0);
    return GetPersonalCurrentAccounts400ErrorObject;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts400ErrorObject };
export var GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum;
(function (GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum) {
    GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum["YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred"] = "Your client has failed to submit a request, and a timeout has occurred.";
})(GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum || (GetPersonalCurrentAccounts408ErrorObjectDescriptionEnum = {}));
export var GetPersonalCurrentAccounts408ErrorObjectStatusEnum;
(function (GetPersonalCurrentAccounts408ErrorObjectStatusEnum) {
    GetPersonalCurrentAccounts408ErrorObjectStatusEnum["FourHundredAndEight"] = "408";
})(GetPersonalCurrentAccounts408ErrorObjectStatusEnum || (GetPersonalCurrentAccounts408ErrorObjectStatusEnum = {}));
export var GetPersonalCurrentAccounts408ErrorObjectTitleEnum;
(function (GetPersonalCurrentAccounts408ErrorObjectTitleEnum) {
    GetPersonalCurrentAccounts408ErrorObjectTitleEnum["ClientTimeout"] = "Client timeout";
})(GetPersonalCurrentAccounts408ErrorObjectTitleEnum || (GetPersonalCurrentAccounts408ErrorObjectTitleEnum = {}));
var GetPersonalCurrentAccounts408ErrorObject = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts408ErrorObject, _super);
    function GetPersonalCurrentAccounts408ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts408ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts408ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts408ErrorObject.prototype, "title", void 0);
    return GetPersonalCurrentAccounts408ErrorObject;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts408ErrorObject };
export var GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum;
(function (GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum) {
    GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum["YouHaveRequestedThisResourceTooOftenSlowDown"] = "You have requested this resource too often. Slow down.";
})(GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum || (GetPersonalCurrentAccounts429ErrorObjectDescriptionEnum = {}));
export var GetPersonalCurrentAccounts429ErrorObjectStatusEnum;
(function (GetPersonalCurrentAccounts429ErrorObjectStatusEnum) {
    GetPersonalCurrentAccounts429ErrorObjectStatusEnum["FourHundredAndTwentyNine"] = "429";
})(GetPersonalCurrentAccounts429ErrorObjectStatusEnum || (GetPersonalCurrentAccounts429ErrorObjectStatusEnum = {}));
export var GetPersonalCurrentAccounts429ErrorObjectTitleEnum;
(function (GetPersonalCurrentAccounts429ErrorObjectTitleEnum) {
    GetPersonalCurrentAccounts429ErrorObjectTitleEnum["TooManyRequests"] = "Too many requests";
})(GetPersonalCurrentAccounts429ErrorObjectTitleEnum || (GetPersonalCurrentAccounts429ErrorObjectTitleEnum = {}));
var GetPersonalCurrentAccounts429ErrorObject = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts429ErrorObject, _super);
    function GetPersonalCurrentAccounts429ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts429ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts429ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts429ErrorObject.prototype, "title", void 0);
    return GetPersonalCurrentAccounts429ErrorObject;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts429ErrorObject };
export var GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum;
(function (GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum) {
    GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum["AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable"] = "An error occurred on the server. No further information is available.";
})(GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum || (GetPersonalCurrentAccounts500ErrorObjectDescriptionEnum = {}));
export var GetPersonalCurrentAccounts500ErrorObjectStatusEnum;
(function (GetPersonalCurrentAccounts500ErrorObjectStatusEnum) {
    GetPersonalCurrentAccounts500ErrorObjectStatusEnum["FiveHundred"] = "500";
})(GetPersonalCurrentAccounts500ErrorObjectStatusEnum || (GetPersonalCurrentAccounts500ErrorObjectStatusEnum = {}));
export var GetPersonalCurrentAccounts500ErrorObjectTitleEnum;
(function (GetPersonalCurrentAccounts500ErrorObjectTitleEnum) {
    GetPersonalCurrentAccounts500ErrorObjectTitleEnum["InternalServerError"] = "Internal server error";
})(GetPersonalCurrentAccounts500ErrorObjectTitleEnum || (GetPersonalCurrentAccounts500ErrorObjectTitleEnum = {}));
var GetPersonalCurrentAccounts500ErrorObject = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts500ErrorObject, _super);
    function GetPersonalCurrentAccounts500ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts500ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts500ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts500ErrorObject.prototype, "title", void 0);
    return GetPersonalCurrentAccounts500ErrorObject;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts500ErrorObject };
export var GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum;
(function (GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum) {
    GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum["TheServiceIsTemporarilyUnavailable"] = "The service is temporarily unavailable.";
})(GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum || (GetPersonalCurrentAccounts503ErrorObjectDescriptionEnum = {}));
export var GetPersonalCurrentAccounts503ErrorObjectStatusEnum;
(function (GetPersonalCurrentAccounts503ErrorObjectStatusEnum) {
    GetPersonalCurrentAccounts503ErrorObjectStatusEnum["FiveHundredAndThree"] = "503";
})(GetPersonalCurrentAccounts503ErrorObjectStatusEnum || (GetPersonalCurrentAccounts503ErrorObjectStatusEnum = {}));
export var GetPersonalCurrentAccounts503ErrorObjectTitleEnum;
(function (GetPersonalCurrentAccounts503ErrorObjectTitleEnum) {
    GetPersonalCurrentAccounts503ErrorObjectTitleEnum["ServiceTemporarilyUnavailable"] = "Service temporarily unavailable";
})(GetPersonalCurrentAccounts503ErrorObjectTitleEnum || (GetPersonalCurrentAccounts503ErrorObjectTitleEnum = {}));
var GetPersonalCurrentAccounts503ErrorObject = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts503ErrorObject, _super);
    function GetPersonalCurrentAccounts503ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts503ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts503ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts503ErrorObject.prototype, "title", void 0);
    return GetPersonalCurrentAccounts503ErrorObject;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts503ErrorObject };
var GetPersonalCurrentAccountsErrorObject = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccountsErrorObject, _super);
    function GetPersonalCurrentAccountsErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccountsErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccountsErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccountsErrorObject.prototype, "title", void 0);
    return GetPersonalCurrentAccountsErrorObject;
}(SpeakeasyBase));
export { GetPersonalCurrentAccountsErrorObject };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum["Atm"] = "ATM";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum["Branch"] = "Branch";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum["BusinessCommercialCentre"] = "BusinessCommercialCentre";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum["CallCentre"] = "CallCentre";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum["MobileApps"] = "MobileApps";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum["MobileBanking"] = "MobileBanking";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum["Online"] = "Online";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum["Phone"] = "Phone";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum["Post"] = "Post";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum["PostOffice"] = "PostOffice";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum["RelationshipManager"] = "RelationshipManager";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum["Text"] = "Text";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataAccessChannelsEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["CashDeposit"] = "CashDeposit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["Deposit"] = "Deposit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["DirectDebit"] = "DirectDebit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["InitialDeposit"] = "InitialDeposit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["InternetLogon"] = "InternetLogon";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["MobileLogon"] = "MobileLogon";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["RegularDeposit"] = "RegularDeposit";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail
/**
 * Benefit detail
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitDescription" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitID" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitName" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitValue" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Counter" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "counter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CriteriaType" }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "criteriaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultToAccounts" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "defaultToAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumCriteria" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "maximumCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumCriteria" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "minimumCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PromotionEndDate" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "promotionEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PromotionStartDate" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "promotionStartDate", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem
/**
 * Benefit Item
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitDetail", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "benefitDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum["Promotional"] = "Promotional";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum["Regular"] = "Regular";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup
/**
 * Benefit Interest Group
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitItem" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup.prototype, "benefitItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitSubType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup.prototype, "benefitSubType", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits
/**
 * Benefit
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Benefit" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits.prototype, "benefit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitGroup", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits.prototype, "benefitGroup", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem
/**
 * Card Pricing
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateAdjustment" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem.prototype, "exchangeRateAdjustment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum["Promotional"] = "Promotional";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum["Regular"] = "Regular";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingProductStateEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing
/**
 * Card Price
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CAPricingItem" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricingCaPricingItem)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing.prototype, "caPricingItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductState" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing.prototype, "productState", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum["BasicCard"] = "BasicCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum["BusinessQuickLodgeCard"] = "BusinessQuickLodgeCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum["Cashcard"] = "Cashcard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum["ContactlessCashcard"] = "ContactlessCashcard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum["ContactlessDebitMastercard"] = "ContactlessDebitMastercard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum["ContactlessDebitVisa"] = "ContactlessDebitVisa";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum["DebitMastercard"] = "DebitMastercard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum["VisaDebit"] = "VisaDebit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum["DepositCard"] = "DepositCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum["OperatorCard"] = "OperatorCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum["PocaCard"] = "POCACard";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCardTypeEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["Daily"] = "Daily";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["Weekly"] = "Weekly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["Monthly"] = "Monthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["Yearly"] = "Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum["Overnight"] = "Overnight";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum["Banded"] = "Banded";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum["Tiered"] = "Tiered";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum["Whole"] = "Whole";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum["Fixed"] = "Fixed";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum["Variable"] = "Variable";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum["Apr"] = "APR";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum["Aer"] = "AER";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum["Gross"] = "Gross";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum["Net"] = "Net";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum["RepApr"] = "RepApr";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers
/**
 * Credit Interest Tiers
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=APRAERRate" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "apraerRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DailyChargeForMaximum" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "dailyChargeForMaximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DailyChargeForMinimum" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "dailyChargeForMinimum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InterestTier" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "interestTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rate" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "rate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateComparisonType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "rateComparisonType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMaximum" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "tierValueMaximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMinimum" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers.prototype, "tierValueMinimum", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum["Compound"] = "Compound";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum["PayAway"] = "PayAway";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum["SelfCredit"] = "SelfCredit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum["SimpleInterest"] = "SimpleInterest";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem
/**
 * Credit Interest item
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationFrequency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem.prototype, "calculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CalculationMethod" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem.prototype, "calculationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndDate" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FixedInterestLength" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem.prototype, "fixedInterestLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InterestNotes" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem.prototype, "interestNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InterestRateType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem.prototype, "interestRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InterestTiers", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem.prototype, "interestTiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentMethod" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem.prototype, "paymentMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartDate" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum["Promotional"] = "Promotional";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum["Regular"] = "Regular";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup
/**
 * Credit Interest Group
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditInterestItem" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroupCreditInterestItem)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup.prototype, "creditInterestItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InterestTierSubType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup.prototype, "interestTierSubType", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest
/**
 * Credit Interest
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditCharged" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest.prototype, "creditCharged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditInterestGroup", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterestCreditInterestGroup }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest.prototype, "creditInterestGroup", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum["Hard"] = "Hard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum["Soft"] = "Soft";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScoreEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum["Hard"] = "Hard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum["Soft"] = "Soft";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["AnyBusinessCustomer"] = "AnyBusinessCustomer";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["BusinessOnly"] = "BusinessOnly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["CreditCard"] = "CreditCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["CreditScoring"] = "CreditScoring";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["EmailAddress"] = "EmailAddress";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["ExistingCustomers"] = "ExistingCustomers";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["IdAndV"] = "IdAndV";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["Mortgage"] = "Mortgage";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NoArrearsOnLoan"] = "NoArrearsOnLoan";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NoCustomerInArrears"] = "NoCustomerInArrears";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NoOverOverdraftThirtyDays"] = "NoOverOverdraftThirtyDays";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NoSoleUkAccountOrBankrupt"] = "NoSoleUkAccountOrBankrupt";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["Ntb"] = "NTB";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NtbBusiness"] = "NTBBusiness";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["SoleStudentAccount"] = "SoleStudentAccount";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["SoleUkAccount"] = "SoleUkAccount";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["StudentsOnly"] = "StudentsOnly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["TwoMonthsOfCourseStart"] = "TwoMonthsOfCourseStart";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["UcasFulltimeTwoYears"] = "UCASFulltimeTwoYears";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum["ExistingCustomers"] = "ExistingCustomers";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum["NewCustomersOnly"] = "NewCustomersOnly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum["SwitchersOnly"] = "SwitchersOnly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum["StartUp"] = "StartUp";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["HalfYearly"] = "HalfYearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["Monthly"] = "Monthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["Quarterly"] = "Quarterly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["Weekly"] = "Weekly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["Yearly"] = "Yearly";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Uk"] = "UK";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Eea"] = "EEA";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Eu"] = "EU";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Efta"] = "EFTA";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["GbEng"] = "GB - ENG";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["GbNir"] = "GB - NIR";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["GbSct"] = "GB - SCT";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["GbWls"] = "GB - WLS";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Irl"] = "IRL";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum["Joint"] = "Joint";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum["SoleIncome"] = "SoleIncome";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum["SoleOrJoint"] = "SoleOrJoint";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum["Turnover"] = "Turnover";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility
/**
 * Eligibility
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgeRestricted" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "ageRestricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnnualBusinessTurnover" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "annualBusinessTurnover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnnualBusinessTurnoverCurrency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "annualBusinessTurnoverCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibilityName" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "eligibilityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibilityNotes" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "eligibilityNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibilityType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "eligibilityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncomeCondition" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "incomeCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncomeTurnoverRelated" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "incomeTurnoverRelated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MarketingEligibility" }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "marketingEligibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxNumberOfAccounts" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "maxNumberOfAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumAge" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "maximumAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumAgeToOpen" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "maximumAgeToOpen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumOpeningAmount" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "maximumOpeningAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinIncomeTurnoverPaidIntoAccount" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minIncomeTurnoverPaidIntoAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumAge" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumDeposit" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumDeposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumIncomeFrequency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumIncomeFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumIncomeTurnoverAmount" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumIncomeTurnoverAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumIncomeTurnoverCurrency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumIncomeTurnoverCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalance" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumOperatingBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalanceCurrency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumOperatingBalanceCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalanceExists" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumOperatingBalanceExists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMaximumAmount" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "openingDepositMaximumAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMaximumCurrency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "openingDepositMaximumCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMinimum" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "openingDepositMinimum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMinimumCurrency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "openingDepositMinimumCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFinancialHoldingRequired" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "otherFinancialHoldingRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousBankruptcy" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "previousBankruptcy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResidencyRestricted" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "residencyRestricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResidencyRestrictedRegion" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "residencyRestrictedRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SingleJointIncome" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "singleJointIncome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThirdSectorOrganisations" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "thirdSectorOrganisations", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum["Promotional"] = "Promotional";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum["Regular"] = "Regular";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetailsFeatureSubTypeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails
/**
 * Feature Details
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CriteriaType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails.prototype, "criteriaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureDescription" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails.prototype, "featureDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureName" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails.prototype, "featureName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureSubType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails.prototype, "featureSubType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails.prototype, "featureType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureValue" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails.prototype, "featureValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum["Promotional"] = "Promotional";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum["Regular"] = "Regular";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureProductStateEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature
/**
 * Account Features
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExistingFeature" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature.prototype, "existingFeature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeatureDetails", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeatureFeatureDetails }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature.prototype, "featureDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductState" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature.prototype, "productState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["AccountClosing"] = "AccountClosing";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["AccountOpening"] = "AccountOpening";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["AtTimeOfLoanRepayment"] = "AtTimeOfLoanRepayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Daily"] = "Daily";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["EveryFiveBusinessDays"] = "EveryFiveBusinessDays";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Item"] = "Item";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Monthly"] = "Monthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["OnAccountAnniversary"] = "OnAccountAnniversary";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerHour"] = "PerHour";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerSheet"] = "PerSheet";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Quarterly"] = "Quarterly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["SixMonthly"] = "SixMonthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["StartOfLoan"] = "StartOfLoan";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Weekly"] = "Weekly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Yearly"] = "Yearly";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails
/**
 * Fee Sub Details
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeFrequency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeHigherTier" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeHigherTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeLowerTier" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeLowerTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeMax" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeMin" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeesAndChargesNotes" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feesAndChargesNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Negotiable" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "negotiable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepresentativeRate" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "representativeRate", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["Other"] = "Other";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmDonation"] = "ATMDonation";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmDeposAtmPaidIn"] = "ATMDeposATMPaidIn";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCertBalance"] = "ReportCertBalance";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadConVisaCredit"] = "ATMAbroadConVisaCredit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadConVisaDebit"] = "ATMAbroadConVisaDebit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCardnetEnvIn"] = "ATMCardnetEnvIn";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCashGroupAtmCreditCard"] = "ATMCashGroupATMCreditCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCashNonGroupAtmCredittcard"] = "ATMCashNonGroupATMCredittcard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCashGroupAtmDebitCard"] = "ATMCashGroupATMDebitCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCashNonGroupAtmDebitcard"] = "ATMCashNonGroupATMDebitcard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmConGroupAtm"] = "ATMConGroupATM";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroad"] = "ATMAbroad";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmForeignCashDebCard"] = "ATMForeignCashDebCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadGoldVisaDebit"] = "ATMAbroadGoldVisaDebit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmSpainCashCard"] = "ATMSpainCashCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmSpainDebitCard"] = "ATMSpainDebitCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmSpainConversionDebitCard"] = "ATMSpainConversionDebitCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmSpainConversionCashCard"] = "ATMSpainConversionCashCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmNonSterlingWithdrawal"] = "ATMNonSterlingWithdrawal";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadVisaCredit"] = "ATMAbroadVisaCredit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadVisaDebit"] = "ATMAbroadVisaDebit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadConVisaGoldDebit"] = "ATMAbroadConVisaGoldDebit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmWidthdrawCash"] = "ATMWidthdrawCash";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineAncilliary"] = "BACSOnLineAncilliary";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsBatch"] = "BACSBatch";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineFile"] = "BACSOnLineFile";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsFileItem"] = "BACSFileItem";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineSetup"] = "BACSOnLineSetup ";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsItem"] = "BACSItem";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsItemInterbranch"] = "BACSItemInterbranch";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsBulkBatch"] = "BACSBulkBatch";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineOverlimit"] = "BACSOnLineOverlimit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLinePayment"] = "BACSOnLinePayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsRecallItem"] = "BACSRecallItem";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineService"] = "BACSOnLineService";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsBulkInternet"] = "BACSBulkInternet";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebSmartCard"] = "BACSTELDirDebSmartCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebWebInit"] = "BACSTELDirDebWebInit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsteLirDebWebInit"] = "BACSTELirDebWebInit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebOverlimit"] = "BACSTELDirDebOverlimit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebPayment"] = "BACSTELDirDebPayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebService"] = "BACSTELDirDebService";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebAncilliary"] = "BACSTELDirDebAncilliary";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsDirectItemProfile"] = "BACSDirectItemProfile";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelAncilliary"] = "BACSTELAncilliary";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelSmartCard"] = "BACSTELSmartCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelFile"] = "BACSTELFile";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelSetup"] = "BACSTELSetup ";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelOverlimit"] = "BACSTELOverlimit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelPayment"] = "BACSTELPayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelService"] = "BACSTELService";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutBranch"] = "CHAPSOutBranch";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsCancellation"] = "CHAPSCancellation";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutOnlineDepositAcc"] = "CHAPSOutOnlineDepositAcc";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsIn"] = "CHAPSIn";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutInterBank"] = "CHAPSOutInterBank";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsInterBank"] = "CHAPSInterBank";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutPost"] = "CHAPSOutPost";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutInterBranch"] = "CHAPSOutInterBranch";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOut"] = "CHAPSOut";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutOnline"] = "CHAPSOutOnline";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapSandForeignPay"] = "CHAPSandForeignPay";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutManual"] = "CHAPSOutManual";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CardCardReplacement"] = "CardCardReplacement";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsCounter"] = "DraftsCounter";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsBankers"] = "DraftsBankers";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsIntlPayableAbroad"] = "DraftsIntlPayableAbroad";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsLostStolen"] = "DraftsLostStolen";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CardPersonalisedCard"] = "CardPersonalisedCard";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsIntlStoppedCancelled"] = "DraftsIntlStoppedCancelled";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["EuroChqXLess"] = "EuroChqXLess";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["EuroChqXPlus"] = "EuroChqXPlus";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsOutFutureDated"] = "FPSOutFutureDated";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsOutImmediate"] = "FPSOutImmediate";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsOut"] = "FPSOut";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsOutOwn"] = "FPSOutOwn";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsInBranch"] = "FPSInBranch";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsukPayUrgent"] = "FPSUKPayUrgent";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalArticlesReport"] = "LegalArticlesReport";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalSealing"] = "LegalSealing";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalBondAndGuarantee"] = "LegalBondAndGuarantee";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalCourtOrder"] = "LegalCourtOrder";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalCoSearch"] = "LegalCoSearch";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalDepositAssignment"] = "LegalDepositAssignment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalGuaranteePrep"] = "LegalGuaranteePrep";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalLifePolicyPrepCo"] = "LegalLifePolicyPrepCo";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalLifePolicyPrepPersonal"] = "LegalLifePolicyPrepPersonal";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalPriorityPariPassu"] = "LegalPriorityPariPassu";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalSubordinationAgreement"] = "LegalSubordinationAgreement";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DirDebDirectDebitAdmin"] = "DirDebDirectDebitAdmin";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DirDebDirectDebitCancel"] = "DirDebDirectDebitCancel";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayBibForeignLimit"] = "IntlPayBIBForeignLimit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayCreditTransCust"] = "IntlPayCreditTransCust";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayCreditTransNonCust"] = "IntlPayCreditTransNonCust";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayUrgentPaymentForeign"] = "IntlPayUrgentPaymentForeign";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayExpressMoneyMover"] = "IntlPayExpressMoneyMover";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayEeaPayUrgent"] = "IntlPayEEAPayUrgent";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayIrishPayUrgent"] = "IntlPayIrishPayUrgent";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayEeaPay"] = "IntlPayEEAPay";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignIn1CPlus"] = "IntlPayForeignIn1CPlus";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignPaymentInUkAcc"] = "IntlPayForeignPaymentInUKAcc";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignCharge"] = "IntlPayForeignCharge";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignCancellation"] = "IntlPayForeignCancellation";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignStandardEuEuroBic"] = "IntlPayForeignStandardEUEuroBIC";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxFeeRate"] = "IntlPayFXFeeRate";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignInternet"] = "IntlPayForeignInternet";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeign"] = "IntlPayForeign";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignInbound"] = "IntlPayForeignInbound";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxPaymentOut"] = "IntlPayFXPaymentOut";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignInSub1C"] = "IntlPayForeignInSub1C";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxRate"] = "IntlPayFXRate";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignStandardEuEuroNoBic"] = "IntlPayForeignStandardEUEuroNoBIC";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxPaymentOutIr"] = "IntlPayFXPaymentOutIR";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxFee"] = "IntlPayFXFee";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayPurchaseNonSterling"] = "IntlPayPurchaseNonSterling";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayPostPaymentForeign"] = "IntlPayPostPaymentForeign";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayPurchaseRateNonSterling"] = "IntlPayPurchaseRateNonSterling";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayPaymentTracing"] = "IntlPayPaymentTracing";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayStandardMoneyMover"] = "IntlPayStandardMoneyMover";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayMt101Transaction"] = "IntlPayMT101Transaction";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayTransNonSterling"] = "IntlPayTransNonSterling";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayTransRateNonSterling"] = "IntlPayTransRateNonSterling";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignUrgentEuEuroBic"] = "IntlPayForeignUrgentEUEuroBIC";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignUrgentEuEuroNoBic"] = "IntlPayForeignUrgentEUEuroNoBIC";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayUrgentPaymentGroup"] = "IntlPayUrgentPaymentGroup";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayUrgentPaymentUk"] = "IntlPayUrgentPaymentUK";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayUsaPayUrgent"] = "IntlPayUSAPayUrgent";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayCurrencyPurchase"] = "IntlPayCurrencyPurchase";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayWorldpayPayment"] = "IntlPayWorldpayPayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayCurrencyWithdraw"] = "IntlPayCurrencyWithdraw";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayBankDetailsWrong"] = "InvPayBankDetailsWrong";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayForeignBcnr"] = "InvPayForeignBCNR";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayForeignRecall"] = "InvPayForeignRecall";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvGeneralInq"] = "InvGeneralInq";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvOldInstruction"] = "InvOldInstruction";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayPaymentRecall"] = "InvPayPaymentRecall";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayReturnDebitXvLess"] = "InvPayReturnDebitXVLess";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayReturnDebitXvPlus"] = "InvPayReturnDebitXVPlus";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayStopPayment"] = "InvPayStopPayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayStandingOrdUnpaid"] = "InvPayStandingOrdUnpaid";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepAccess"] = "SafeKeepAccess";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepDeedMedium"] = "SafeKeepDeedMedium";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepingEnvelope"] = "SafeKeepingEnvelope";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepingInspection"] = "SafeKeepingInspection";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepingLargeItem"] = "SafeKeepingLargeItem";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepMultipleItems"] = "SafeKeepMultipleItems";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepingParcel"] = "SafeKeepingParcel";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepDeedSmall"] = "SafeKeepDeedSmall";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepOneItem"] = "SafeKeepOneItem";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepSafeCustody"] = "SafeKeepSafeCustody";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanArrangementFeePc"] = "LoanArrangementFeePC";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanArrangement"] = "LoanArrangement";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanEarlyRepayment"] = "LoanEarlyRepayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanLatePayment"] = "LoanLatePayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanSmeUnsecuredLoan"] = "LoanSMEUnsecuredLoan";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanTieredArrangement"] = "LoanTieredArrangement";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["NightSafeNightSafeBankOpen"] = "NightSafeNightSafeBankOpen";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["NightSafeCreditSub5K"] = "NightSafeCreditSub5K";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["NightSafeNightSafe"] = "NightSafeNightSafe";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["NightSafeNightSafePaidIn"] = "NightSafeNightSafePaidIn";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OverdraftAnnualReview"] = "OverdraftAnnualReview";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OverdraftTempOverdraft"] = "OverdraftTempOverdraft";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OverdraftUnauthorisedBorrowing"] = "OverdraftUnauthorisedBorrowing";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["PoPostOfficeCounterCredit"] = "POPostOfficeCounterCredit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["PoPostOfficeCashCredit"] = "POPostOfficeCashCredit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["PoPostOfficeCashOut"] = "POPostOfficeCashOut";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["PoPostOfficeWithdrawal"] = "POPostOfficeWithdrawal";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqBookTheftLossAllStopped"] = "ChqBookTheftLossAllStopped";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqIssuedCurrencyAcc"] = "ChqIssuedCurrencyAcc";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqCopy"] = "ChqCopy";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqDraft"] = "ChqDraft";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqIn"] = "ChqIn";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqDraftSterling"] = "ChqDraftSterling";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqOutIssued"] = "ChqOutIssued";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqSpecialChqPresentation"] = "ChqSpecialChqPresentation";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqCounterCheque"] = "ChqCounterCheque";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqChequeswithStatement"] = "ChqChequeswithStatement";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqStopped"] = "ChqStopped";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqTrans"] = "ChqTrans";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqDraftFx"] = "ChqDraftFX";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignCourier"] = "ChqForeignCourier";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegTenThou"] = "ChqForeignNegTenThou";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegHundred"] = "ChqForeignNegHundred";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChequeForeignBankDivi"] = "ChequeForeignBankDivi";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegFiftyThou"] = "ChqForeignNegFiftyThou";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqPensionCheque"] = "ChqPensionCheque";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChequeForeignOtherDivi"] = "ChequeForeignOtherDivi";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegFiveThou"] = "ChqForeignNegFiveThou";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegMax"] = "ChqForeignNegMax";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignGbpmmdPlus"] = "ChqForeignGBPMMDPlus";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqGiftCheque"] = "ChqGiftCheque";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqCounterLodgement"] = "ChqCounterLodgement";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqCashDropLodgement"] = "ChqCashDropLodgement";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqChequePhotocopy"] = "ChqChequePhotocopy";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqPostOfficeCredit"] = "ChqPostOfficeCredit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqPostOfficeChequeCollected"] = "ChqPostOfficeChequeCollected";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqChequeRetrieval"] = "ChqChequeRetrieval";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqReconcilliationPerTrans"] = "ChqReconcilliationPerTrans";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqSpecialPresentationCount"] = "ChqSpecialPresentationCount";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqSpecialPresentationPtt"] = "ChqSpecialPresentationPTT";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqUnpaidCharge"] = "ChqUnpaidCharge";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqUnpaidTransIn"] = "ChqUnpaidTransIn";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqUnpaidTransOut"] = "ChqUnpaidTransOut";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqUnpaidCheque"] = "ChqUnpaidCheque";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportAuditLetter"] = "ReportAuditLetter";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportFaxAdviceAdditional"] = "ReportFAXAdviceAdditional";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportTelAdviceAdditional"] = "ReportTelAdviceAdditional";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCreditHistory"] = "ReportCreditHistory";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCertInterestDuplicate"] = "ReportCertInterestDuplicate";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCertInterest"] = "ReportCertInterest";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCreditHistoryAdditionalInYear"] = "ReportCreditHistoryAdditionalInYear";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportForeignStatusEnqElec"] = "ReportForeignStatusEnqElec";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportForeignStatusEnq"] = "ReportForeignStatusEnq";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCashBackorInterestAnal"] = "ReportCashBackorInterestAnal";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementChqDaily"] = "ReportStatementChqDaily";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementChqFortnightly"] = "ReportStatementChqFortnightly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementChqMonthly"] = "ReportStatementChqMonthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementChqWeekly"] = "ReportStatementChqWeekly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementAndDiviChq"] = "ReportStatementAndDiviChq";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportReference"] = "ReportReference";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportReferralItem"] = "ReportReferralItem";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementByAtm"] = "ReportStatementByATM";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementByBranch"] = "ReportStatementByBranch";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementCopyRegular"] = "ReportStatementCopyRegular";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatusEnquiry"] = "ReportStatusEnquiry";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementFrequent"] = "ReportStatementFrequent";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementMonthly"] = "ReportStatementMonthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementCopy1"] = "ReportStatementCopy1";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementToBranch"] = "ReportStatementToBranch";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportSmsTextMiniStatementorAlert"] = "ReportSMSTextMiniStatementorAlert";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementFortnightly"] = "ReportStatementFortnightly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportSmsTextMiniStatementWoM"] = "ReportSMSTextMiniStatementWoM";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportSmsTextAlertBalance"] = "ReportSMSTextAlertBalance";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportSmsTextAlert"] = "ReportSMSTextAlert";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportTaxCert"] = "ReportTaxCert";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportWeeklyStatement"] = "ReportWeeklyStatement";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportTextMessageBanking"] = "ReportTextMessageBanking";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaCancellation"] = "SEPACancellation";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaBranch"] = "SEPABranch";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaCredit"] = "SEPACredit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaDirectDebit"] = "SEPADirectDebit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaIn"] = "SEPAIn";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaEuro"] = "SEPAEuro";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaOut"] = "SEPAOut";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaUnpaid"] = "SEPAUnpaid";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaWinbitsAnnualService"] = "SEPAWinbitsAnnual Service";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaWinbitsTransaction"] = "SEPAWinbitsTransaction";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBillPaymentBranch"] = "TransBillPaymentBranch";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBillCollect"] = "TransBillCollect";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTelephoneBillPayment"] = "TransTelephoneBillPayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBankPayment"] = "TransBankPayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBillPaymentTelephone"] = "TransBillPaymentTelephone";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCorrespondentBankFee"] = "TransCorrespondentBankFee";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCreditTransferUkDifferent"] = "TransCreditTransferUKDifferent";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCreditTransferUkSame"] = "TransCreditTransferUKSame";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCredit"] = "TransCredit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCreditTransfer"] = "TransCreditTransfer";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBranchCredit"] = "TransBranchCredit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransDebit"] = "TransDebit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransDebCardDeb"] = "TransDebCardDeb";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransUkDirDeb"] = "TransUKDirDeb";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransManualDeb"] = "TransManualDeb";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBuyForeignWithGbp"] = "TransBuyForeignWithGBP";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransGoodValueReq"] = "TransGoodValueReq";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransSwiftOutUkForeign"] = "TransSWIFTOutUKForeign";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransInconpleteInstruction"] = "TransInconpleteInstruction";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransManualEntries"] = "TransManualEntries";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransManualTrans"] = "TransManualTrans";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransNonSterling"] = "TransNonSterling";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransPosSaleForeign"] = "TransPOSSaleForeign";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransPriPaymentPost"] = "TransPriPaymentPost";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransPosSaleUk"] = "TransPOSSaleUK";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransReturnPayment"] = "TransReturnPayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransReconciliationPerTrans"] = "TransReconciliationPerTrans";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransStandingOrdAdmin"] = "TransStandingOrdAdmin";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransStandingOrd"] = "TransStandingOrd";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransStandingOrdManPay"] = "TransStandingOrdManPay";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTravellersChqOtherBank"] = "TransTravellersChqOtherBank";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTelBusiPriPaymentForeignToUkAcc"] = "TransTelBusiPriPaymentForeignToUKAcc";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTeleItem"] = "TransTeleItem";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTelBusiPriPaymentToGrpAcc"] = "TransTelBusiPriPaymentToGrpAcc";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTravellersChqRate"] = "TransTravellersChqRate";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTransferExGroup"] = "TransTransferExGroup";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransUnauthorisedPaidTrans"] = "TransUnauthorisedPaidTrans";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransUrgentPaymentPostal"] = "TransUrgentPaymentPostal";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransUnpaidTrans"] = "TransUnpaidTrans";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTelBusiPriPaymentToNonGrpAcc"] = "TransTelBusiPriPaymentToNonGrpAcc";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransSwiftOutNonEeaSterling"] = "TransSWIFTOutNonEEASterling";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoAutoCredit"] = "AutoAutoCredit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoAutomatedEntries"] = "AutoAutomatedEntries";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoAutoCreditPhoneInet"] = "AutoAutoCreditPhoneInet";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoAutomatedTrans"] = "AutoAutomatedTrans";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoDebitCardCommercial"] = "AutoDebitCardCommercial";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoFpsAutoCredit"] = "AutoFPSAutoCredit";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["VisaConvertAbroadForeign"] = "VisaConvertAbroadForeign";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["VisaBureauDeChange"] = "VisaBureauDeChange";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["VisaTravellersChqorCurrency"] = "VisaTravellersChqorCurrency";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInternetBillPayment"] = "OnlineInternetBillPayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBusinessOnlineEuroPayment"] = "OnlineBusinessOnlineEuroPayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBusinessOnlineUrgentEuroPayment"] = "OnlineBusinessOnlineUrgentEuroPayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBusinessOnlineForeignPayment"] = "OnlineBusinessOnlineForeignPayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInterbankTransfer"] = "OnlineInterbankTransfer";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInterbankPerTransfer"] = "OnlineInterbankPerTransfer";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInterbranchTransfer"] = "OnlineInterbranchTransfer";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInterbranchPerTransfer"] = "OnlineInterbranchPerTransfer";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineSubscriptionMonthly"] = "OnlineSubscriptionMonthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBankingPayment"] = "OnlineBankingPayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBankingSubscription"] = "OnlineBankingSubscription";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePosSale"] = "OnlinePOSSale";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustAncillarys"] = "OnlinePersonalCustAncillarys";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustService"] = "OnlinePersonalCustService";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustOverlimits"] = "OnlinePersonalCustOverlimits";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineReplacementCardReader"] = "OnlineReplacementCardReader";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustSetUp"] = "OnlinePersonalCustSetUp";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustTransaction"] = "OnlinePersonalCustTransaction";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePaymentinGbPtoUk"] = "OnlinePaymentinGBPtoUK";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineUrgentPayment"] = "OnlineUrgentPayment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePaymentinUsDtoUs"] = "OnlinePaymentinUSDtoUS";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBulkDirectDebSterling"] = "OnlineBulkDirectDebSterling";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqSent"] = "ForeignChqSent";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqSelf"] = "ForeignChqSelf";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqEncashment"] = "ForeignChqEncashment";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxInwardsCust"] = "ForeignFXInwardsCust";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxTransfersRoi"] = "ForeignFXTransfersROI";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxForwardTrans"] = "ForeignFXForwardTrans";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxTransfersBoi"] = "ForeignFXTransfersBOI";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignExMaintenance"] = "ForeignExMaintenance";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxInwardsNonCust"] = "ForeignFXInwardsNonCust";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxOutwards"] = "ForeignFXOutwards";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignPurchase"] = "ForeignPurchase";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignStatusRep"] = "ForeignStatusRep";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqDraft"] = "ForeignChqDraft";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqCLess"] = "ForeignChqCLess";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqMLess"] = "ForeignChqMLess";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqOther"] = "ForeignChqOther";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqMPlus"] = "ForeignChqMPlus";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqCcc"] = "ForeignChqCCC";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCAccountFee"] = "ServiceCAccountFee";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCAccountFeeMonthly"] = "ServiceCAccountFeeMonthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCAccountFeeQuarterly"] = "ServiceCAccountFeeQuarterly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCBalanceHandling"] = "ServiceCBalanceHandling";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCFixedTariff"] = "ServiceCFixedTariff";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCBusiDepAccBreakage"] = "ServiceCBusiDepAccBreakage";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCMonitorDaily"] = "ServiceCMonitorDaily";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCManagementFee"] = "ServiceCManagementFee";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCMinimumMonthlyFee"] = "ServiceCMinimumMonthlyFee";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCMonitorMonthly"] = "ServiceCMonitorMonthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCMonitorWeekly"] = "ServiceCMonitorWeekly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCSecurityFee"] = "ServiceCSecurityFee";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCmt940AccountFirst"] = "ServiceCMT940AccountFirst";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCmt940AccountSubsequent"] = "ServiceCMT940AccountSubsequent";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCOther"] = "ServiceCOther";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCoinHandling"] = "CounterCoinHandling";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashIn"] = "CounterCashIn";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashInNotUs"] = "CounterCashInNotUs";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashOut"] = "CounterCashOut";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashX"] = "CounterCashX";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterForeignCashMax"] = "CounterForeignCashMax";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterForeignNoteHandling"] = "CounterForeignNoteHandling";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterForeignCashOut"] = "CounterForeignCashOut";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashFeeRate"] = "CounterCashFeeRate";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterForeignCashOutTx"] = "CounterForeignCashOutTx";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCounterLodgement"] = "CounterCounterLodgement";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashDropLodgement"] = "CounterCashDropLodgement";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterNotesLodged"] = "CounterNotesLodged";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterNotesOut"] = "CounterNotesOut";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashInOwn"] = "CounterCashInOwn";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterPaidTrans"] = "CounterPaidTrans";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashFeePercent"] = "CounterCashFeePercent";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail
/**
 * Fee Detail
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeSubDetails" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "feeSubDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Other" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "other", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum["Promotional"] = "Promotional";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum["Regular"] = "Regular";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails
/**
 * Fee Details
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeDetail" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails.prototype, "feeDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeSubType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails.prototype, "feeSubType", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees
/**
 * Fees
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeDetails", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "feeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeHigherTier" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "feeHigherTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeLowerTier" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "feeLowerTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum["Promotional"] = "Promotional";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum["Regular"] = "Regular";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges
/**
 * Fees And Charges
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Fees" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges.prototype, "fees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductState" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges.prototype, "productState", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum["AndroidPay"] = "AndroidPay";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum["ApplePay"] = "ApplePay";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum["IssuerMobileApp"] = "IssuerMobileApp";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum["MobileBankingApp"] = "MobileBankingApp";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum["Other"] = "Other";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum["PayM"] = "PayM";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum["SamsungPay"] = "SamsungPay";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum["VodafoneWallet"] = "VodafoneWallet";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataMobileWalletEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum["Uk"] = "UK";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum["Eu"] = "EU";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand
/**
 * Brand
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrademarkID" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand.prototype, "trademarkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrademarkIPOCode" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand.prototype, "trademarkIpoCode", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName
/**
 * Organisation Name
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LegalName" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName.prototype, "legalName", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation
/**
 * Parent organisation
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BIC" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation.prototype, "bic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LEI" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation.prototype, "lei", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganisationName" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation.prototype, "organisationName", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation
/**
 * Organisation
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Brand" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentOrganisation" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation.prototype, "parentOrganisation", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum["No"] = "No";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum["Yes"] = "Yes";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeeChargeNegotiableIndicatorEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Daily"] = "Daily";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Weekly"] = "Weekly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Monthly"] = "Monthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Yearly"] = "Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Overnight"] = "Overnight";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum["Other"] = "Other";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Daily"] = "Daily";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Weekly"] = "Weekly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Monthly"] = "Monthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Yearly"] = "Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Overnight"] = "Overnight";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum["Other"] = "Other";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency
/**
 * Other Code Type
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "name", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency
/**
 * Other Code Type
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "name", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType
/**
 * Other Code Type
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType.prototype, "name", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType
/**
 * Other Code Type
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType.prototype, "name", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum["Gross"] = "Gross";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum["Net"] = "Net";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum["Other"] = "Other";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateTypeEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum["Periodic"] = "Periodic";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum["Minimum"] = "Minimum";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum["Maximum"] = "Maximum";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum["Setup"] = "Setup";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum["Review"] = "Review";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum["Renewal"] = "Renewal";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum["MinimumSetup"] = "MinimumSetup";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum["MaximumSetup"] = "MaximumSetup";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum["Total"] = "Total";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum["Item"] = "Item";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum["EmergencyLending"] = "EmergencyLending";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum["Other"] = "Other";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeTypeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges
/**
 * Overdraft Fees Charges
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeAmount" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges.prototype, "feeChargeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeApplicationFrequency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges.prototype, "feeChargeApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeCalculationFrequency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges.prototype, "feeChargeCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherApplicationFrequency" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges.prototype, "feeChargeOtherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherCalculationFrequency" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges.prototype, "feeChargeOtherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherType" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeOtherType)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges.prototype, "feeChargeOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRate" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges.prototype, "feeChargeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRateOtherType" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndChargesFeeChargeRateOtherType)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges.prototype, "feeChargeRateOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRateType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges.prototype, "feeChargeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges.prototype, "feeChargeType", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum["Promotional"] = "Promotional";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum["Regular"] = "Regular";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftProductStateEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType
/**
 * Other Code Type
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType.prototype, "name", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum["Unarranged"] = "Unarranged";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum["Arranged"] = "Arranged";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum["Other"] = "Other";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementTypeEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Daily"] = "Daily";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Weekly"] = "Weekly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Monthly"] = "Monthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Yearly"] = "Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Overnight"] = "Overnight";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum["Other"] = "Other";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Daily"] = "Daily";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Weekly"] = "Weekly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Monthly"] = "Monthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Yearly"] = "Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Overnight"] = "Overnight";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum["Other"] = "Other";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency
/**
 * Other Code Type
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "name", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency
/**
 * Other Code Type
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "name", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType
/**
 * Other Code Type
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType.prototype, "name", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType
/**
 * Other Code Type
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType.prototype, "name", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum["Gross"] = "Gross";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum["Net"] = "Net";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum["Other"] = "Other";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Periodic"] = "Periodic";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Minimum"] = "Minimum";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Maximum"] = "Maximum";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Setup"] = "Setup";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Review"] = "Review";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Renewal"] = "Renewal";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["MinimumSetup"] = "MinimumSetup";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["MaximumSetup"] = "MaximumSetup";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Total"] = "Total";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Item"] = "Item";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["EmergencyLending"] = "EmergencyLending";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum["Other"] = "Other";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges
/**
 * Overdraft Fees Charges
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeAmount" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeApplicationFrequency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeCalculationFrequency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherApplicationFrequency" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeOtherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherCalculationFrequency" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeOtherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherType" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRate" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRateOtherType" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeRateOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRateType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges.prototype, "feeChargeType", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Daily"] = "Daily";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Weekly"] = "Weekly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Monthly"] = "Monthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Quarterly"] = "Quarterly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Yearly"] = "Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Overnight"] = "Overnight";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum["Other"] = "Other";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Daily"] = "Daily";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Weekly"] = "Weekly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Monthly"] = "Monthly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Quarterly"] = "Quarterly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["HalfYearly"] = "Half-Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Yearly"] = "Yearly";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Overnight"] = "Overnight";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum["Other"] = "Other";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency
/**
 * Other Code Type
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency.prototype, "name", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency
/**
 * Other Code Type
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency.prototype, "name", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType
/**
 * Other Code Type
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType.prototype, "name", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType
/**
 * Other Code Type
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Code" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType.prototype, "name", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum["Gross"] = "Gross";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum["Net"] = "Net";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum["Other"] = "Other";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Periodic"] = "Periodic";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Minimum"] = "Minimum";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Maximum"] = "Maximum";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Setup"] = "Setup";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Review"] = "Review";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Renewal"] = "Renewal";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["MinimumSetup"] = "MinimumSetup";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["MaximumSetup"] = "MaximumSetup";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Total"] = "Total";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Item"] = "Item";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["EmergencyLending"] = "EmergencyLending";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum["Other"] = "Other";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges
/**
 * Overdraft Fees Charges
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeAmount" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeApplicationFrequency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeCalculationFrequency" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherApplicationFrequency" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeOtherApplicationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherCalculationFrequency" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeOtherCalculationFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeOtherType" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRate" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRateOtherType" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeRateOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeRateType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeRateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges.prototype, "feeChargeType", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand
/**
 * Tiers
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EAR" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "ear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "feesAndCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandIdentification" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "tierBandIdentification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMaximum" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "tierValueMaximum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierValueMinimum" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand.prototype, "tierValueMinimum", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand };
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet
/**
 * Tier Bandset
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArrangementOtherType" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetArrangementOtherType)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet.prototype, "arrangementOtherType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArrangementType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet.prototype, "arrangementType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BufferAmount" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet.prototype, "bufferAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CMADefinedIndicator" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet.prototype, "cmaDefinedIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EAR" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet.prototype, "ear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetFeesAndCharges }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet.prototype, "feesAndCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftTierBand", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSetOverdraftTierBand }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet.prototype, "overdraftTierBand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TierBandSetIdentification" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet.prototype, "tierBandSetIdentification", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum["Committed"] = "Committed";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum["OnDemand"] = "OnDemand";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTypeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft
/**
 * Overdraft
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeChargeNegotiableIndicator" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft.prototype, "feeChargeNegotiableIndicator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftFeesAndCharges }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft.prototype, "feesAndCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumMonthlyOverdraftCharge" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft.prototype, "maximumMonthlyOverdraftCharge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Notes" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftProductState" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft.prototype, "overdraftProductState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftTierBandSet", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraftOverdraftTierBandSet }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft.prototype, "overdraftTierBandSet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft.prototype, "overdraftType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft.prototype, "stopPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Term" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft.prototype, "term", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Basic"] = "Basic";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Business"] = "Business";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["General"] = "General";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Graduate"] = "Graduate";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["International"] = "International";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Packaged"] = "Packaged";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Personal"] = "Personal";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Premium"] = "Premium";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Reward"] = "Reward";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Sme"] = "SME";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Student"] = "Student";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["YoungAdult"] = "YoungAdult";
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Youth"] = "Youth";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum["Pca"] = "PCA";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum = {}));
// GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData
/**
 * Personal Current Account
**/
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessChannels" }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "accessChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Benefits" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "benefits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CAPricing", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCaPricing }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "caPricing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CardNotes" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "cardNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CardType" }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "cardType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CardWithdrawalLimit" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "cardWithdrawalLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChequeBookAvailable" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "chequeBookAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Contactless" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "contactless", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditInterest" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCreditInterest)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "creditInterest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningForGettingAnAccount" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "creditScoringPartOfAccountOpeningForGettingAnAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningForIDVerification" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "creditScoringPartOfAccountOpeningForIdVerification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore" }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "creditScoringPartOfAccountOpeningIdVerificationIsAHardOrSoftCreditScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningIDVerificationText" }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "creditScoringPartOfAccountOpeningIdVerificationText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore" }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "creditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreditScoringPartOfAccountOpeningText" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "creditScoringPartOfAccountOpeningText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Eligibility" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "eligibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Feature", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeature }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "feature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "feesAndCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InternationalPaymentsSupported" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "internationalPaymentsSupported", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumMonthlyCharge" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "maximumMonthlyCharge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MobileWallet" }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "mobileWallet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Organisation" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "organisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Overdraft", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOverdraft }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "overdraft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverdraftOffered" }),
        __metadata("design:type", Boolean)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "overdraftOffered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductDescription" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductIdentifier" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductName" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductSegment" }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductType" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductURL" }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TsandCs" }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "tsandCs", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData };
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum["UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions"] = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum["HttpsWwwOpenbankingOrgUkOpenLicence"] = "https://www.openbanking.org.uk/open-licence";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum = {}));
export var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
(function (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum) {
    GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum["HttpsWwwOpenbankingOrgUkTerms"] = "https://www.openbanking.org.uk/terms";
})(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum || (GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum = {}));
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Agreement" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "agreement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdated" }),
        __metadata("design:type", Date)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=License" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TermsOfUse" }),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "termsOfUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalResults" }),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "totalResults", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData };
var GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson, _super);
    function GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonData }),
        __metadata("design:type", Array)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData)
    ], GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson.prototype, "meta", void 0);
    return GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson;
}(SpeakeasyBase));
export { GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson };
var GetPersonalCurrentAccountsRequest = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccountsRequest, _super);
    function GetPersonalCurrentAccountsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalCurrentAccountsHeaders)
    ], GetPersonalCurrentAccountsRequest.prototype, "headers", void 0);
    return GetPersonalCurrentAccountsRequest;
}(SpeakeasyBase));
export { GetPersonalCurrentAccountsRequest };
var GetPersonalCurrentAccountsResponse = /** @class */ (function (_super) {
    __extends(GetPersonalCurrentAccountsResponse, _super);
    function GetPersonalCurrentAccountsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalCurrentAccounts400ErrorObject)
    ], GetPersonalCurrentAccountsResponse.prototype, "fourHundredErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalCurrentAccounts408ErrorObject)
    ], GetPersonalCurrentAccountsResponse.prototype, "fourHundredAndEightErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalCurrentAccounts429ErrorObject)
    ], GetPersonalCurrentAccountsResponse.prototype, "fourHundredAndTwentyNineErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalCurrentAccounts500ErrorObject)
    ], GetPersonalCurrentAccountsResponse.prototype, "fiveHundredErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalCurrentAccounts503ErrorObject)
    ], GetPersonalCurrentAccountsResponse.prototype, "fiveHundredAndThreeErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPersonalCurrentAccountsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalCurrentAccountsErrorObject)
    ], GetPersonalCurrentAccountsResponse.prototype, "errorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJson)
    ], GetPersonalCurrentAccountsResponse.prototype, "getPersonalCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetPersonalCurrentAccountsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPersonalCurrentAccountsResponse.prototype, "statusCode", void 0);
    return GetPersonalCurrentAccountsResponse;
}(SpeakeasyBase));
export { GetPersonalCurrentAccountsResponse };

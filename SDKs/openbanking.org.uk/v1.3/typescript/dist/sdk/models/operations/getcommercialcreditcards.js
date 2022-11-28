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
var GetCommercialCreditCardsHeaders = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCardsHeaders, _super);
    function GetCommercialCreditCardsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCardsHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCardsHeaders.prototype, "ifNoneMatch", void 0);
    return GetCommercialCreditCardsHeaders;
}(SpeakeasyBase));
export { GetCommercialCreditCardsHeaders };
export var GetCommercialCreditCards400ErrorObjectDescriptionEnum;
(function (GetCommercialCreditCards400ErrorObjectDescriptionEnum) {
    GetCommercialCreditCards400ErrorObjectDescriptionEnum["YouHaveSentARequestWhichCouldNotBeUnderstood"] = "You have sent a request which could not be understood.";
})(GetCommercialCreditCards400ErrorObjectDescriptionEnum || (GetCommercialCreditCards400ErrorObjectDescriptionEnum = {}));
export var GetCommercialCreditCards400ErrorObjectStatusEnum;
(function (GetCommercialCreditCards400ErrorObjectStatusEnum) {
    GetCommercialCreditCards400ErrorObjectStatusEnum["FourHundred"] = "400";
})(GetCommercialCreditCards400ErrorObjectStatusEnum || (GetCommercialCreditCards400ErrorObjectStatusEnum = {}));
export var GetCommercialCreditCards400ErrorObjectTitleEnum;
(function (GetCommercialCreditCards400ErrorObjectTitleEnum) {
    GetCommercialCreditCards400ErrorObjectTitleEnum["BadRequest"] = "Bad request";
})(GetCommercialCreditCards400ErrorObjectTitleEnum || (GetCommercialCreditCards400ErrorObjectTitleEnum = {}));
var GetCommercialCreditCards400ErrorObject = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards400ErrorObject, _super);
    function GetCommercialCreditCards400ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards400ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards400ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards400ErrorObject.prototype, "title", void 0);
    return GetCommercialCreditCards400ErrorObject;
}(SpeakeasyBase));
export { GetCommercialCreditCards400ErrorObject };
export var GetCommercialCreditCards408ErrorObjectDescriptionEnum;
(function (GetCommercialCreditCards408ErrorObjectDescriptionEnum) {
    GetCommercialCreditCards408ErrorObjectDescriptionEnum["YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred"] = "Your client has failed to submit a request, and a timeout has occurred.";
})(GetCommercialCreditCards408ErrorObjectDescriptionEnum || (GetCommercialCreditCards408ErrorObjectDescriptionEnum = {}));
export var GetCommercialCreditCards408ErrorObjectStatusEnum;
(function (GetCommercialCreditCards408ErrorObjectStatusEnum) {
    GetCommercialCreditCards408ErrorObjectStatusEnum["FourHundredAndEight"] = "408";
})(GetCommercialCreditCards408ErrorObjectStatusEnum || (GetCommercialCreditCards408ErrorObjectStatusEnum = {}));
export var GetCommercialCreditCards408ErrorObjectTitleEnum;
(function (GetCommercialCreditCards408ErrorObjectTitleEnum) {
    GetCommercialCreditCards408ErrorObjectTitleEnum["ClientTimeout"] = "Client timeout";
})(GetCommercialCreditCards408ErrorObjectTitleEnum || (GetCommercialCreditCards408ErrorObjectTitleEnum = {}));
var GetCommercialCreditCards408ErrorObject = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards408ErrorObject, _super);
    function GetCommercialCreditCards408ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards408ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards408ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards408ErrorObject.prototype, "title", void 0);
    return GetCommercialCreditCards408ErrorObject;
}(SpeakeasyBase));
export { GetCommercialCreditCards408ErrorObject };
export var GetCommercialCreditCards429ErrorObjectDescriptionEnum;
(function (GetCommercialCreditCards429ErrorObjectDescriptionEnum) {
    GetCommercialCreditCards429ErrorObjectDescriptionEnum["YouHaveRequestedThisResourceTooOftenSlowDown"] = "You have requested this resource too often. Slow down.";
})(GetCommercialCreditCards429ErrorObjectDescriptionEnum || (GetCommercialCreditCards429ErrorObjectDescriptionEnum = {}));
export var GetCommercialCreditCards429ErrorObjectStatusEnum;
(function (GetCommercialCreditCards429ErrorObjectStatusEnum) {
    GetCommercialCreditCards429ErrorObjectStatusEnum["FourHundredAndTwentyNine"] = "429";
})(GetCommercialCreditCards429ErrorObjectStatusEnum || (GetCommercialCreditCards429ErrorObjectStatusEnum = {}));
export var GetCommercialCreditCards429ErrorObjectTitleEnum;
(function (GetCommercialCreditCards429ErrorObjectTitleEnum) {
    GetCommercialCreditCards429ErrorObjectTitleEnum["TooManyRequests"] = "Too many requests";
})(GetCommercialCreditCards429ErrorObjectTitleEnum || (GetCommercialCreditCards429ErrorObjectTitleEnum = {}));
var GetCommercialCreditCards429ErrorObject = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards429ErrorObject, _super);
    function GetCommercialCreditCards429ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards429ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards429ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards429ErrorObject.prototype, "title", void 0);
    return GetCommercialCreditCards429ErrorObject;
}(SpeakeasyBase));
export { GetCommercialCreditCards429ErrorObject };
export var GetCommercialCreditCards500ErrorObjectDescriptionEnum;
(function (GetCommercialCreditCards500ErrorObjectDescriptionEnum) {
    GetCommercialCreditCards500ErrorObjectDescriptionEnum["AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable"] = "An error occurred on the server. No further information is available.";
})(GetCommercialCreditCards500ErrorObjectDescriptionEnum || (GetCommercialCreditCards500ErrorObjectDescriptionEnum = {}));
export var GetCommercialCreditCards500ErrorObjectStatusEnum;
(function (GetCommercialCreditCards500ErrorObjectStatusEnum) {
    GetCommercialCreditCards500ErrorObjectStatusEnum["FiveHundred"] = "500";
})(GetCommercialCreditCards500ErrorObjectStatusEnum || (GetCommercialCreditCards500ErrorObjectStatusEnum = {}));
export var GetCommercialCreditCards500ErrorObjectTitleEnum;
(function (GetCommercialCreditCards500ErrorObjectTitleEnum) {
    GetCommercialCreditCards500ErrorObjectTitleEnum["InternalServerError"] = "Internal server error";
})(GetCommercialCreditCards500ErrorObjectTitleEnum || (GetCommercialCreditCards500ErrorObjectTitleEnum = {}));
var GetCommercialCreditCards500ErrorObject = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards500ErrorObject, _super);
    function GetCommercialCreditCards500ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards500ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards500ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards500ErrorObject.prototype, "title", void 0);
    return GetCommercialCreditCards500ErrorObject;
}(SpeakeasyBase));
export { GetCommercialCreditCards500ErrorObject };
export var GetCommercialCreditCards503ErrorObjectDescriptionEnum;
(function (GetCommercialCreditCards503ErrorObjectDescriptionEnum) {
    GetCommercialCreditCards503ErrorObjectDescriptionEnum["TheServiceIsTemporarilyUnavailable"] = "The service is temporarily unavailable.";
})(GetCommercialCreditCards503ErrorObjectDescriptionEnum || (GetCommercialCreditCards503ErrorObjectDescriptionEnum = {}));
export var GetCommercialCreditCards503ErrorObjectStatusEnum;
(function (GetCommercialCreditCards503ErrorObjectStatusEnum) {
    GetCommercialCreditCards503ErrorObjectStatusEnum["FiveHundredAndThree"] = "503";
})(GetCommercialCreditCards503ErrorObjectStatusEnum || (GetCommercialCreditCards503ErrorObjectStatusEnum = {}));
export var GetCommercialCreditCards503ErrorObjectTitleEnum;
(function (GetCommercialCreditCards503ErrorObjectTitleEnum) {
    GetCommercialCreditCards503ErrorObjectTitleEnum["ServiceTemporarilyUnavailable"] = "Service temporarily unavailable";
})(GetCommercialCreditCards503ErrorObjectTitleEnum || (GetCommercialCreditCards503ErrorObjectTitleEnum = {}));
var GetCommercialCreditCards503ErrorObject = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards503ErrorObject, _super);
    function GetCommercialCreditCards503ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards503ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards503ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards503ErrorObject.prototype, "title", void 0);
    return GetCommercialCreditCards503ErrorObject;
}(SpeakeasyBase));
export { GetCommercialCreditCards503ErrorObject };
var GetCommercialCreditCardsErrorObject = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCardsErrorObject, _super);
    function GetCommercialCreditCardsErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCardsErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCardsErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCardsErrorObject.prototype, "title", void 0);
    return GetCommercialCreditCardsErrorObject;
}(SpeakeasyBase));
export { GetCommercialCreditCardsErrorObject };
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["CashDeposit"] = "CashDeposit";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["Deposit"] = "Deposit";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["DirectDebit"] = "DirectDebit";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["InitialDeposit"] = "InitialDeposit";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["InternetLogon"] = "InternetLogon";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["MobileLogon"] = "MobileLogon";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["RegularDeposit"] = "RegularDeposit";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = {}));
// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail
/**
 * Benefit detail
**/
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitDescription" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitID" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitName" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitType" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitValue" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Counter" }),
        __metadata("design:type", Number)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "counter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CriteriaType" }),
        __metadata("design:type", Array)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "criteriaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultToAccounts" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "defaultToAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumCriteria" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "maximumCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumCriteria" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "minimumCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PromotionEndDate" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "promotionEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PromotionStartDate" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "promotionStartDate", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail };
// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem
/**
 * Benefit Item
**/
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitDetail", elemType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail }),
        __metadata("design:type", Array)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "benefitDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem };
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum["Promotional"] = "Promotional";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum["Regular"] = "Regular";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum = {}));
// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup
/**
 * Benefit Interest Group
**/
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitItem" }),
        __metadata("design:type", GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup.prototype, "benefitItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitSubType" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup.prototype, "benefitSubType", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup };
// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits
/**
 * Benefit
**/
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Benefit" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits.prototype, "benefit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitGroup", elemType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup }),
        __metadata("design:type", Array)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits.prototype, "benefitGroup", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits };
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum["Promotional"] = "Promotional";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum["Regular"] = "Regular";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCcSubTypeEnum = {}));
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum["Annual"] = "Annual";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum["Monthly"] = "Monthly";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum = {}));
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum["Cashcard"] = "Cashcard";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum["CreditMastercard"] = "CreditMastercard";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum["CreditVisa"] = "CreditVisa";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemCardSchemeEnum = {}));
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum["Daily"] = "Daily";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum["Flexible"] = "Flexible";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum["Fortnightly"] = "Fortnightly";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum["HalfYearly"] = "HalfYearly";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum["Monthly"] = "Monthly";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum["Quarterly"] = "Quarterly";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum["Weekly"] = "Weekly";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum["Yearly"] = "Yearly";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum = {}));
// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem
/**
 * Commercial Credit Card Item
**/
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=APRRate" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "aprRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AbilityToSetIndividualLimits" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "abilityToSetIndividualLimits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AccessToOnlineDataReportingTool" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "accessToOnlineDataReportingTool", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AllocationofRepayment" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "allocationofRepayment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnnualAccountFeeType" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "annualAccountFeeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnnualFeeAmount" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "annualFeeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BalanceTransferInterestRatePeriod" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "balanceTransferInterestRatePeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BalanceTransferRate" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "balanceTransferRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CardScheme" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "cardScheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CashAdvanceRate" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "cashAdvanceRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CashWithdrawalsAllowed" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "cashWithdrawalsAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CashbackPercent" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "cashbackPercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ChequeFeePercent" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "chequeFeePercent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConvenienceCheque" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "convenienceCheque", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DaysInterestFreeCreditIfPaymentFull" }),
        __metadata("design:type", Number)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "daysInterestFreeCreditIfPaymentFull", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExchangeRateAdjustment" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "exchangeRateAdjustment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeesOnCheque" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "feesOnCheque", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForeignCashFee" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "foreignCashFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForeignCashFeeRate" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "foreignCashFeeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForeignPurchaseFee" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "foreignPurchaseFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ForeignPurchaseFeeRate" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "foreignPurchaseFeeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IssuingEmergencyCardsFees" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "issuingEmergencyCardsFees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumNumberOfCardsPermitted" }),
        __metadata("design:type", Number)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "maximumNumberOfCardsPermitted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumCreditLimit" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "minimumCreditLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumLendingAmount" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "minimumLendingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumRepaymentAmount" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "minimumRepaymentAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumRepaymentPercentage" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "minimumRepaymentPercentage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonSterlingCashFee" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "nonSterlingCashFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonSterlingCashFeeRate" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "nonSterlingCashFeeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonSterlingPurchaseFee" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "nonSterlingPurchaseFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonSterlingPurchaseFeeRate" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "nonSterlingPurchaseFeeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonSterlingTransactionFee" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "nonSterlingTransactionFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonSterlingTransactionFeeRate" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "nonSterlingTransactionFeeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverLimitFee" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "overLimitFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentDaysAfterStatement" }),
        __metadata("design:type", Number)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "paymentDaysAfterStatement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentSchemeExchangeFee" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "paymentSchemeExchangeFee", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentSchemeExchangeFeeRate" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "paymentSchemeExchangeFeeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentSchemeExchangeRate" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "paymentSchemeExchangeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PurchaseRate" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "purchaseRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepaymentFrequency" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "repaymentFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepaymentNotes" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "repaymentNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatementAtAccountLevel" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "statementAtAccountLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StatementAtPersonalLevel" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "statementAtPersonalLevel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem };
// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails
/**
 * Commercial Credit Card Group
**/
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CCSubType" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails.prototype, "ccSubType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CommercialCreditCardItem" }),
        __metadata("design:type", GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetailsCommercialCreditCardItem)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails.prototype, "commercialCreditCardItem", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails };
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["AnyBusinessCustomer"] = "AnyBusinessCustomer";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["BusinessOnly"] = "BusinessOnly";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["CreditCard"] = "CreditCard";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["CreditScoring"] = "CreditScoring";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["EmailAddress"] = "EmailAddress";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["ExistingCustomers"] = "ExistingCustomers";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["IdAndV"] = "IdAndV";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["Mortgage"] = "Mortgage";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NoArrearsOnLoan"] = "NoArrearsOnLoan";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NoCustomerInArrears"] = "NoCustomerInArrears";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NoOverOverdraftThirtyDays"] = "NoOverOverdraftThirtyDays";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NoSoleUkAccountOrBankrupt"] = "NoSoleUkAccountOrBankrupt";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["Ntb"] = "NTB";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NtbBusiness"] = "NTBBusiness";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["SoleStudentAccount"] = "SoleStudentAccount";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["SoleUkAccount"] = "SoleUkAccount";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["StudentsOnly"] = "StudentsOnly";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["TwoMonthsOfCourseStart"] = "TwoMonthsOfCourseStart";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["UcasFulltimeTwoYears"] = "UCASFulltimeTwoYears";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum = {}));
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum["ExistingCustomers"] = "ExistingCustomers";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum["NewCustomersOnly"] = "NewCustomersOnly";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum["SwitchersOnly"] = "SwitchersOnly";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum["StartUp"] = "StartUp";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum = {}));
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["HalfYearly"] = "HalfYearly";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["Monthly"] = "Monthly";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["Quarterly"] = "Quarterly";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["Weekly"] = "Weekly";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["Yearly"] = "Yearly";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum = {}));
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Uk"] = "UK";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Eea"] = "EEA";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Eu"] = "EU";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Efta"] = "EFTA";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["GbEng"] = "GB - ENG";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["GbNir"] = "GB - NIR";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["GbSct"] = "GB - SCT";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["GbWls"] = "GB - WLS";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Irl"] = "IRL";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum = {}));
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum["Joint"] = "Joint";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum["SoleIncome"] = "SoleIncome";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum["SoleOrJoint"] = "SoleOrJoint";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum["Turnover"] = "Turnover";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum = {}));
// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility
/**
 * Eligibility
**/
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgeRestricted" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "ageRestricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnnualBusinessTurnover" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "annualBusinessTurnover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnnualBusinessTurnoverCurrency" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "annualBusinessTurnoverCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibilityName" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "eligibilityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibilityNotes" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "eligibilityNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibilityType" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "eligibilityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncomeCondition" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "incomeCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncomeTurnoverRelated" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "incomeTurnoverRelated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MarketingEligibility" }),
        __metadata("design:type", Array)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "marketingEligibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxNumberOfAccounts" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "maxNumberOfAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumAge" }),
        __metadata("design:type", Number)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "maximumAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumAgeToOpen" }),
        __metadata("design:type", Number)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "maximumAgeToOpen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumOpeningAmount" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "maximumOpeningAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinIncomeTurnoverPaidIntoAccount" }),
        __metadata("design:type", Number)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minIncomeTurnoverPaidIntoAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumAge" }),
        __metadata("design:type", Number)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumDeposit" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumDeposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumIncomeFrequency" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumIncomeFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumIncomeTurnoverAmount" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumIncomeTurnoverAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumIncomeTurnoverCurrency" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumIncomeTurnoverCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalance" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumOperatingBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalanceCurrency" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumOperatingBalanceCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalanceExists" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumOperatingBalanceExists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMaximumAmount" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "openingDepositMaximumAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMaximumCurrency" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "openingDepositMaximumCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMinimum" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "openingDepositMinimum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMinimumCurrency" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "openingDepositMinimumCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFinancialHoldingRequired" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "otherFinancialHoldingRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousBankruptcy" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "previousBankruptcy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResidencyRestricted" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "residencyRestricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResidencyRestrictedRegion" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "residencyRestrictedRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SingleJointIncome" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "singleJointIncome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThirdSectorOrganisations" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "thirdSectorOrganisations", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility };
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum["Uk"] = "UK";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum["Eu"] = "EU";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum = {}));
// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand
/**
 * Brand
**/
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrademarkID" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand.prototype, "trademarkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrademarkIPOCode" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand.prototype, "trademarkIpoCode", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand };
// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName
/**
 * Organisation Name
**/
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LegalName" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName.prototype, "legalName", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName };
// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation
/**
 * Parent organisation
**/
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BIC" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation.prototype, "bic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LEI" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation.prototype, "lei", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganisationName" }),
        __metadata("design:type", GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation.prototype, "organisationName", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation };
// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation
/**
 * Organisation
**/
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Brand" }),
        __metadata("design:type", GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentOrganisation" }),
        __metadata("design:type", GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation.prototype, "parentOrganisation", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation };
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Cashback"] = "Cashback";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Corporate"] = "Corporate";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["General"] = "General";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Reward"] = "Reward";
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Sme"] = "SME";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum = {}));
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum["CommercialCreditCards"] = "CommercialCreditCards";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeEnum = {}));
// GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData
/**
 * Commercial Credit Card
**/
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Benefits" }),
        __metadata("design:type", GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "benefits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Details" }),
        __metadata("design:type", GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataDetails)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "details", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Eligibility" }),
        __metadata("design:type", GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "eligibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=KeyFeatures" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "keyFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Organisation" }),
        __metadata("design:type", GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "organisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherKeyFeatures" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "otherKeyFeatures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentHoliday" }),
        __metadata("design:type", Boolean)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "paymentHoliday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentHolidayDescription" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "paymentHolidayDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductIdentifier" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductName" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductSegment" }),
        __metadata("design:type", Array)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductType" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductURL" }),
        __metadata("design:type", Array)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TsandCs" }),
        __metadata("design:type", Array)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "tsandCs", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData };
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum["UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions"] = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum = {}));
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum["HttpsWwwOpenbankingOrgUkOpenLicence"] = "https://www.openbanking.org.uk/open-licence";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum = {}));
export var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
(function (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum) {
    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum["HttpsWwwOpenbankingOrgUkTerms"] = "https://www.openbanking.org.uk/terms";
})(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum || (GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum = {}));
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Agreement" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "agreement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdated" }),
        __metadata("design:type", Date)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=License" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TermsOfUse" }),
        __metadata("design:type", String)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "termsOfUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalResults" }),
        __metadata("design:type", Number)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "totalResults", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData };
var GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson, _super);
    function GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonData }),
        __metadata("design:type", Array)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData)
    ], GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson.prototype, "meta", void 0);
    return GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson;
}(SpeakeasyBase));
export { GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson };
var GetCommercialCreditCardsRequest = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCardsRequest, _super);
    function GetCommercialCreditCardsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommercialCreditCardsHeaders)
    ], GetCommercialCreditCardsRequest.prototype, "headers", void 0);
    return GetCommercialCreditCardsRequest;
}(SpeakeasyBase));
export { GetCommercialCreditCardsRequest };
var GetCommercialCreditCardsResponse = /** @class */ (function (_super) {
    __extends(GetCommercialCreditCardsResponse, _super);
    function GetCommercialCreditCardsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommercialCreditCards400ErrorObject)
    ], GetCommercialCreditCardsResponse.prototype, "fourHundredErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommercialCreditCards408ErrorObject)
    ], GetCommercialCreditCardsResponse.prototype, "fourHundredAndEightErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommercialCreditCards429ErrorObject)
    ], GetCommercialCreditCardsResponse.prototype, "fourHundredAndTwentyNineErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommercialCreditCards500ErrorObject)
    ], GetCommercialCreditCardsResponse.prototype, "fiveHundredErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommercialCreditCards503ErrorObject)
    ], GetCommercialCreditCardsResponse.prototype, "fiveHundredAndThreeErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCommercialCreditCardsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommercialCreditCardsErrorObject)
    ], GetCommercialCreditCardsResponse.prototype, "errorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJson)
    ], GetCommercialCreditCardsResponse.prototype, "getCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetCommercialCreditCardsResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCommercialCreditCardsResponse.prototype, "statusCode", void 0);
    return GetCommercialCreditCardsResponse;
}(SpeakeasyBase));
export { GetCommercialCreditCardsResponse };

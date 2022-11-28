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
var GetUnsecuredSmeLoansHeaders = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoansHeaders, _super);
    function GetUnsecuredSmeLoansHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Modified-Since" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoansHeaders.prototype, "ifModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-None-Match" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoansHeaders.prototype, "ifNoneMatch", void 0);
    return GetUnsecuredSmeLoansHeaders;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoansHeaders };
export var GetUnsecuredSmeLoans400ErrorObjectDescriptionEnum;
(function (GetUnsecuredSmeLoans400ErrorObjectDescriptionEnum) {
    GetUnsecuredSmeLoans400ErrorObjectDescriptionEnum["YouHaveSentARequestWhichCouldNotBeUnderstood"] = "You have sent a request which could not be understood.";
})(GetUnsecuredSmeLoans400ErrorObjectDescriptionEnum || (GetUnsecuredSmeLoans400ErrorObjectDescriptionEnum = {}));
export var GetUnsecuredSmeLoans400ErrorObjectStatusEnum;
(function (GetUnsecuredSmeLoans400ErrorObjectStatusEnum) {
    GetUnsecuredSmeLoans400ErrorObjectStatusEnum["FourHundred"] = "400";
})(GetUnsecuredSmeLoans400ErrorObjectStatusEnum || (GetUnsecuredSmeLoans400ErrorObjectStatusEnum = {}));
export var GetUnsecuredSmeLoans400ErrorObjectTitleEnum;
(function (GetUnsecuredSmeLoans400ErrorObjectTitleEnum) {
    GetUnsecuredSmeLoans400ErrorObjectTitleEnum["BadRequest"] = "Bad request";
})(GetUnsecuredSmeLoans400ErrorObjectTitleEnum || (GetUnsecuredSmeLoans400ErrorObjectTitleEnum = {}));
var GetUnsecuredSmeLoans400ErrorObject = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans400ErrorObject, _super);
    function GetUnsecuredSmeLoans400ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans400ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans400ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans400ErrorObject.prototype, "title", void 0);
    return GetUnsecuredSmeLoans400ErrorObject;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans400ErrorObject };
export var GetUnsecuredSmeLoans408ErrorObjectDescriptionEnum;
(function (GetUnsecuredSmeLoans408ErrorObjectDescriptionEnum) {
    GetUnsecuredSmeLoans408ErrorObjectDescriptionEnum["YourClientHasFailedToSubmitARequestAndATimeoutHasOccurred"] = "Your client has failed to submit a request, and a timeout has occurred.";
})(GetUnsecuredSmeLoans408ErrorObjectDescriptionEnum || (GetUnsecuredSmeLoans408ErrorObjectDescriptionEnum = {}));
export var GetUnsecuredSmeLoans408ErrorObjectStatusEnum;
(function (GetUnsecuredSmeLoans408ErrorObjectStatusEnum) {
    GetUnsecuredSmeLoans408ErrorObjectStatusEnum["FourHundredAndEight"] = "408";
})(GetUnsecuredSmeLoans408ErrorObjectStatusEnum || (GetUnsecuredSmeLoans408ErrorObjectStatusEnum = {}));
export var GetUnsecuredSmeLoans408ErrorObjectTitleEnum;
(function (GetUnsecuredSmeLoans408ErrorObjectTitleEnum) {
    GetUnsecuredSmeLoans408ErrorObjectTitleEnum["ClientTimeout"] = "Client timeout";
})(GetUnsecuredSmeLoans408ErrorObjectTitleEnum || (GetUnsecuredSmeLoans408ErrorObjectTitleEnum = {}));
var GetUnsecuredSmeLoans408ErrorObject = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans408ErrorObject, _super);
    function GetUnsecuredSmeLoans408ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans408ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans408ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans408ErrorObject.prototype, "title", void 0);
    return GetUnsecuredSmeLoans408ErrorObject;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans408ErrorObject };
export var GetUnsecuredSmeLoans429ErrorObjectDescriptionEnum;
(function (GetUnsecuredSmeLoans429ErrorObjectDescriptionEnum) {
    GetUnsecuredSmeLoans429ErrorObjectDescriptionEnum["YouHaveRequestedThisResourceTooOftenSlowDown"] = "You have requested this resource too often. Slow down.";
})(GetUnsecuredSmeLoans429ErrorObjectDescriptionEnum || (GetUnsecuredSmeLoans429ErrorObjectDescriptionEnum = {}));
export var GetUnsecuredSmeLoans429ErrorObjectStatusEnum;
(function (GetUnsecuredSmeLoans429ErrorObjectStatusEnum) {
    GetUnsecuredSmeLoans429ErrorObjectStatusEnum["FourHundredAndTwentyNine"] = "429";
})(GetUnsecuredSmeLoans429ErrorObjectStatusEnum || (GetUnsecuredSmeLoans429ErrorObjectStatusEnum = {}));
export var GetUnsecuredSmeLoans429ErrorObjectTitleEnum;
(function (GetUnsecuredSmeLoans429ErrorObjectTitleEnum) {
    GetUnsecuredSmeLoans429ErrorObjectTitleEnum["TooManyRequests"] = "Too many requests";
})(GetUnsecuredSmeLoans429ErrorObjectTitleEnum || (GetUnsecuredSmeLoans429ErrorObjectTitleEnum = {}));
var GetUnsecuredSmeLoans429ErrorObject = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans429ErrorObject, _super);
    function GetUnsecuredSmeLoans429ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans429ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans429ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans429ErrorObject.prototype, "title", void 0);
    return GetUnsecuredSmeLoans429ErrorObject;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans429ErrorObject };
export var GetUnsecuredSmeLoans500ErrorObjectDescriptionEnum;
(function (GetUnsecuredSmeLoans500ErrorObjectDescriptionEnum) {
    GetUnsecuredSmeLoans500ErrorObjectDescriptionEnum["AnErrorOccurredOnTheServerNoFurtherInformationIsAvailable"] = "An error occurred on the server. No further information is available.";
})(GetUnsecuredSmeLoans500ErrorObjectDescriptionEnum || (GetUnsecuredSmeLoans500ErrorObjectDescriptionEnum = {}));
export var GetUnsecuredSmeLoans500ErrorObjectStatusEnum;
(function (GetUnsecuredSmeLoans500ErrorObjectStatusEnum) {
    GetUnsecuredSmeLoans500ErrorObjectStatusEnum["FiveHundred"] = "500";
})(GetUnsecuredSmeLoans500ErrorObjectStatusEnum || (GetUnsecuredSmeLoans500ErrorObjectStatusEnum = {}));
export var GetUnsecuredSmeLoans500ErrorObjectTitleEnum;
(function (GetUnsecuredSmeLoans500ErrorObjectTitleEnum) {
    GetUnsecuredSmeLoans500ErrorObjectTitleEnum["InternalServerError"] = "Internal server error";
})(GetUnsecuredSmeLoans500ErrorObjectTitleEnum || (GetUnsecuredSmeLoans500ErrorObjectTitleEnum = {}));
var GetUnsecuredSmeLoans500ErrorObject = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans500ErrorObject, _super);
    function GetUnsecuredSmeLoans500ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans500ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans500ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans500ErrorObject.prototype, "title", void 0);
    return GetUnsecuredSmeLoans500ErrorObject;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans500ErrorObject };
export var GetUnsecuredSmeLoans503ErrorObjectDescriptionEnum;
(function (GetUnsecuredSmeLoans503ErrorObjectDescriptionEnum) {
    GetUnsecuredSmeLoans503ErrorObjectDescriptionEnum["TheServiceIsTemporarilyUnavailable"] = "The service is temporarily unavailable.";
})(GetUnsecuredSmeLoans503ErrorObjectDescriptionEnum || (GetUnsecuredSmeLoans503ErrorObjectDescriptionEnum = {}));
export var GetUnsecuredSmeLoans503ErrorObjectStatusEnum;
(function (GetUnsecuredSmeLoans503ErrorObjectStatusEnum) {
    GetUnsecuredSmeLoans503ErrorObjectStatusEnum["FiveHundredAndThree"] = "503";
})(GetUnsecuredSmeLoans503ErrorObjectStatusEnum || (GetUnsecuredSmeLoans503ErrorObjectStatusEnum = {}));
export var GetUnsecuredSmeLoans503ErrorObjectTitleEnum;
(function (GetUnsecuredSmeLoans503ErrorObjectTitleEnum) {
    GetUnsecuredSmeLoans503ErrorObjectTitleEnum["ServiceTemporarilyUnavailable"] = "Service temporarily unavailable";
})(GetUnsecuredSmeLoans503ErrorObjectTitleEnum || (GetUnsecuredSmeLoans503ErrorObjectTitleEnum = {}));
var GetUnsecuredSmeLoans503ErrorObject = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans503ErrorObject, _super);
    function GetUnsecuredSmeLoans503ErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans503ErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans503ErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans503ErrorObject.prototype, "title", void 0);
    return GetUnsecuredSmeLoans503ErrorObject;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans503ErrorObject };
var GetUnsecuredSmeLoansErrorObject = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoansErrorObject, _super);
    function GetUnsecuredSmeLoansErrorObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoansErrorObject.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoansErrorObject.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoansErrorObject.prototype, "title", void 0);
    return GetUnsecuredSmeLoansErrorObject;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoansErrorObject };
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["CashDeposit"] = "CashDeposit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["Deposit"] = "Deposit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["DirectDebit"] = "DirectDebit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["InitialDeposit"] = "InitialDeposit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["InternetLogon"] = "InternetLogon";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["MobileLogon"] = "MobileLogon";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum["RegularDeposit"] = "RegularDeposit";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = {}));
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail
/**
 * Benefit detail
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitDescription" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitID" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitName" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitType" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitValue" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "benefitValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Counter" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "counter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CriteriaType" }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "criteriaType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DefaultToAccounts" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "defaultToAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumCriteria" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "maximumCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumCriteria" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "minimumCriteria", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PromotionEndDate" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "promotionEndDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PromotionStartDate" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail.prototype, "promotionStartDate", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail };
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem
/**
 * Benefit Item
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitDetail", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItemBenefitDetail }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "benefitDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem };
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum["Promotional"] = "Promotional";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum["Regular"] = "Regular";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitSubTypeEnum = {}));
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup
/**
 * Benefit Interest Group
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitItem" }),
        __metadata("design:type", GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroupBenefitItem)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup.prototype, "benefitItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitSubType" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup.prototype, "benefitSubType", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup };
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits
/**
 * Benefit
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Benefit" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits.prototype, "benefit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BenefitGroup", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefitsBenefitGroup }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits.prototype, "benefitGroup", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits };
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum["Branch"] = "Branch";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum["MobileBankingApp"] = "MobileBankingApp";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum["Online"] = "Online";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum["Phone"] = "Phone";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum["Post"] = "Post";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum["PostOffice"] = "PostOffice";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum["Text"] = "Text";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataCustomerAccessChannelsEnum = {}));
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["AnyBusinessCustomer"] = "AnyBusinessCustomer";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["BusinessOnly"] = "BusinessOnly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["CreditCard"] = "CreditCard";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["CreditScoring"] = "CreditScoring";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["EmailAddress"] = "EmailAddress";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["ExistingCustomers"] = "ExistingCustomers";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["IdAndV"] = "IdAndV";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["Mortgage"] = "Mortgage";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NoArrearsOnLoan"] = "NoArrearsOnLoan";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NoCustomerInArrears"] = "NoCustomerInArrears";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NoOverOverdraftThirtyDays"] = "NoOverOverdraftThirtyDays";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NoSoleUkAccountOrBankrupt"] = "NoSoleUkAccountOrBankrupt";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["Ntb"] = "NTB";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["NtbBusiness"] = "NTBBusiness";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["SoleStudentAccount"] = "SoleStudentAccount";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["SoleUkAccount"] = "SoleUkAccount";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["StudentsOnly"] = "StudentsOnly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["TwoMonthsOfCourseStart"] = "TwoMonthsOfCourseStart";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum["UcasFulltimeTwoYears"] = "UCASFulltimeTwoYears";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityEligibilityTypeEnum = {}));
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum["ExistingCustomers"] = "ExistingCustomers";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum["NewCustomersOnly"] = "NewCustomersOnly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum["SwitchersOnly"] = "SwitchersOnly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum["StartUp"] = "StartUp";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMarketingEligibilityEnum = {}));
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["HalfYearly"] = "HalfYearly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["Monthly"] = "Monthly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["Quarterly"] = "Quarterly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["Weekly"] = "Weekly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum["Yearly"] = "Yearly";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityMinimumIncomeFrequencyEnum = {}));
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Uk"] = "UK";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Eea"] = "EEA";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Eu"] = "EU";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Efta"] = "EFTA";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["GbEng"] = "GB - ENG";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["GbNir"] = "GB - NIR";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["GbSct"] = "GB - SCT";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["GbWls"] = "GB - WLS";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum["Irl"] = "IRL";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilityResidencyRestrictedRegionEnum = {}));
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum["Joint"] = "Joint";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum["SoleIncome"] = "SoleIncome";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum["SoleOrJoint"] = "SoleOrJoint";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum["Turnover"] = "Turnover";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibilitySingleJointIncomeEnum = {}));
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility
/**
 * Eligibility
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AgeRestricted" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "ageRestricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnnualBusinessTurnover" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "annualBusinessTurnover", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AnnualBusinessTurnoverCurrency" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "annualBusinessTurnoverCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibilityName" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "eligibilityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibilityNotes" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "eligibilityNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EligibilityType" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "eligibilityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncomeCondition" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "incomeCondition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IncomeTurnoverRelated" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "incomeTurnoverRelated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MarketingEligibility" }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "marketingEligibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxNumberOfAccounts" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "maxNumberOfAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumAge" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "maximumAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumAgeToOpen" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "maximumAgeToOpen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumOpeningAmount" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "maximumOpeningAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinIncomeTurnoverPaidIntoAccount" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minIncomeTurnoverPaidIntoAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumAge" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumAge", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumDeposit" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumDeposit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumIncomeFrequency" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumIncomeFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumIncomeTurnoverAmount" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumIncomeTurnoverAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumIncomeTurnoverCurrency" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumIncomeTurnoverCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalance" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumOperatingBalance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalanceCurrency" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumOperatingBalanceCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumOperatingBalanceExists" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "minimumOperatingBalanceExists", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMaximumAmount" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "openingDepositMaximumAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMaximumCurrency" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "openingDepositMaximumCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMinimum" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "openingDepositMinimum", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OpeningDepositMinimumCurrency" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "openingDepositMinimumCurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherFinancialHoldingRequired" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "otherFinancialHoldingRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PreviousBankruptcy" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "previousBankruptcy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResidencyRestricted" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "residencyRestricted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResidencyRestrictedRegion" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "residencyRestrictedRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SingleJointIncome" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "singleJointIncome", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThirdSectorOrganisations" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility.prototype, "thirdSectorOrganisations", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility };
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["AcademicTerm"] = "AcademicTerm";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["AccountClosing"] = "AccountClosing";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["AccountOpening"] = "AccountOpening";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["AtTimeOfLoanRepayment"] = "AtTimeOfLoanRepayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["ChargingPeriod"] = "ChargingPeriod";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Daily"] = "Daily";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["EveryFiveBusinessDays"] = "EveryFiveBusinessDays";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Item"] = "Item";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Monthly"] = "Monthly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["OnAccountAnniversary"] = "OnAccountAnniversary";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerHour"] = "PerHour";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerOccurrence"] = "PerOccurrence";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerSheet"] = "PerSheet";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerTransactionAmount"] = "PerTransactionAmount";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["PerTransactionPercentage"] = "PerTransactionPercentage";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Quarterly"] = "Quarterly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["SixMonthly"] = "SixMonthly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["StartOfLoan"] = "StartOfLoan";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["StatementMonthly"] = "StatementMonthly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Weekly"] = "Weekly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum["Yearly"] = "Yearly";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = {}));
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails
/**
 * Fee Sub Details
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeAmount" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeFrequency" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeHigherTier" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeHigherTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeLowerTier" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeLowerTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeMax" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeMin" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeRate" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeesAndChargesNotes" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "feesAndChargesNotes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Negotiable" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "negotiable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepresentativeRate" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails.prototype, "representativeRate", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails };
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["Other"] = "Other";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmDonation"] = "ATMDonation";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmDeposAtmPaidIn"] = "ATMDeposATMPaidIn";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCertBalance"] = "ReportCertBalance";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadConVisaCredit"] = "ATMAbroadConVisaCredit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadConVisaDebit"] = "ATMAbroadConVisaDebit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCardnetEnvIn"] = "ATMCardnetEnvIn";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCashGroupAtmCreditCard"] = "ATMCashGroupATMCreditCard";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCashNonGroupAtmCredittcard"] = "ATMCashNonGroupATMCredittcard";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCashGroupAtmDebitCard"] = "ATMCashGroupATMDebitCard";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmCashNonGroupAtmDebitcard"] = "ATMCashNonGroupATMDebitcard";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmConGroupAtm"] = "ATMConGroupATM";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroad"] = "ATMAbroad";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmForeignCashDebCard"] = "ATMForeignCashDebCard";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadGoldVisaDebit"] = "ATMAbroadGoldVisaDebit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmSpainCashCard"] = "ATMSpainCashCard";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmSpainDebitCard"] = "ATMSpainDebitCard";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmSpainConversionDebitCard"] = "ATMSpainConversionDebitCard";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmSpainConversionCashCard"] = "ATMSpainConversionCashCard";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmNonSterlingWithdrawal"] = "ATMNonSterlingWithdrawal";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadVisaCredit"] = "ATMAbroadVisaCredit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadVisaDebit"] = "ATMAbroadVisaDebit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmAbroadConVisaGoldDebit"] = "ATMAbroadConVisaGoldDebit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AtmWidthdrawCash"] = "ATMWidthdrawCash";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineAncilliary"] = "BACSOnLineAncilliary";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsBatch"] = "BACSBatch";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineFile"] = "BACSOnLineFile";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsFileItem"] = "BACSFileItem";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineSetup"] = "BACSOnLineSetup ";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsItem"] = "BACSItem";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsItemInterbranch"] = "BACSItemInterbranch";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsBulkBatch"] = "BACSBulkBatch";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineOverlimit"] = "BACSOnLineOverlimit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLinePayment"] = "BACSOnLinePayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsRecallItem"] = "BACSRecallItem";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsOnLineService"] = "BACSOnLineService";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsBulkInternet"] = "BACSBulkInternet";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebSmartCard"] = "BACSTELDirDebSmartCard";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebWebInit"] = "BACSTELDirDebWebInit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsteLirDebWebInit"] = "BACSTELirDebWebInit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebOverlimit"] = "BACSTELDirDebOverlimit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebPayment"] = "BACSTELDirDebPayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebService"] = "BACSTELDirDebService";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelDirDebAncilliary"] = "BACSTELDirDebAncilliary";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacsDirectItemProfile"] = "BACSDirectItemProfile";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelAncilliary"] = "BACSTELAncilliary";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelSmartCard"] = "BACSTELSmartCard";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelFile"] = "BACSTELFile";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelSetup"] = "BACSTELSetup ";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelOverlimit"] = "BACSTELOverlimit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelPayment"] = "BACSTELPayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["BacstelService"] = "BACSTELService";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutBranch"] = "CHAPSOutBranch";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsCancellation"] = "CHAPSCancellation";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutOnlineDepositAcc"] = "CHAPSOutOnlineDepositAcc";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsIn"] = "CHAPSIn";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutInterBank"] = "CHAPSOutInterBank";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsInterBank"] = "CHAPSInterBank";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutPost"] = "CHAPSOutPost";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutInterBranch"] = "CHAPSOutInterBranch";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOut"] = "CHAPSOut";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutOnline"] = "CHAPSOutOnline";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapSandForeignPay"] = "CHAPSandForeignPay";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChapsOutManual"] = "CHAPSOutManual";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CardCardReplacement"] = "CardCardReplacement";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsCounter"] = "DraftsCounter";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsBankers"] = "DraftsBankers";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsIntlPayableAbroad"] = "DraftsIntlPayableAbroad";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsLostStolen"] = "DraftsLostStolen";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CardPersonalisedCard"] = "CardPersonalisedCard";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DraftsIntlStoppedCancelled"] = "DraftsIntlStoppedCancelled";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["EuroChqXLess"] = "EuroChqXLess";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["EuroChqXPlus"] = "EuroChqXPlus";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsOutFutureDated"] = "FPSOutFutureDated";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsOutImmediate"] = "FPSOutImmediate";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsOut"] = "FPSOut";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsOutOwn"] = "FPSOutOwn";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsInBranch"] = "FPSInBranch";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["FpsukPayUrgent"] = "FPSUKPayUrgent";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalArticlesReport"] = "LegalArticlesReport";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalSealing"] = "LegalSealing";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalBondAndGuarantee"] = "LegalBondAndGuarantee";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalCourtOrder"] = "LegalCourtOrder";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalCoSearch"] = "LegalCoSearch";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalDepositAssignment"] = "LegalDepositAssignment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalGuaranteePrep"] = "LegalGuaranteePrep";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalLifePolicyPrepCo"] = "LegalLifePolicyPrepCo";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalLifePolicyPrepPersonal"] = "LegalLifePolicyPrepPersonal";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalPriorityPariPassu"] = "LegalPriorityPariPassu";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LegalSubordinationAgreement"] = "LegalSubordinationAgreement";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DirDebDirectDebitAdmin"] = "DirDebDirectDebitAdmin";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["DirDebDirectDebitCancel"] = "DirDebDirectDebitCancel";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayBibForeignLimit"] = "IntlPayBIBForeignLimit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayCreditTransCust"] = "IntlPayCreditTransCust";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayCreditTransNonCust"] = "IntlPayCreditTransNonCust";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayUrgentPaymentForeign"] = "IntlPayUrgentPaymentForeign";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayExpressMoneyMover"] = "IntlPayExpressMoneyMover";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayEeaPayUrgent"] = "IntlPayEEAPayUrgent";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayIrishPayUrgent"] = "IntlPayIrishPayUrgent";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayEeaPay"] = "IntlPayEEAPay";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignIn1CPlus"] = "IntlPayForeignIn1CPlus";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignPaymentInUkAcc"] = "IntlPayForeignPaymentInUKAcc";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignCharge"] = "IntlPayForeignCharge";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignCancellation"] = "IntlPayForeignCancellation";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignStandardEuEuroBic"] = "IntlPayForeignStandardEUEuroBIC";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxFeeRate"] = "IntlPayFXFeeRate";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignInternet"] = "IntlPayForeignInternet";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeign"] = "IntlPayForeign";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignInbound"] = "IntlPayForeignInbound";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxPaymentOut"] = "IntlPayFXPaymentOut";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignInSub1C"] = "IntlPayForeignInSub1C";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxRate"] = "IntlPayFXRate";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignStandardEuEuroNoBic"] = "IntlPayForeignStandardEUEuroNoBIC";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxPaymentOutIr"] = "IntlPayFXPaymentOutIR";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayFxFee"] = "IntlPayFXFee";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayPurchaseNonSterling"] = "IntlPayPurchaseNonSterling";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayPostPaymentForeign"] = "IntlPayPostPaymentForeign";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayPurchaseRateNonSterling"] = "IntlPayPurchaseRateNonSterling";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayPaymentTracing"] = "IntlPayPaymentTracing";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayStandardMoneyMover"] = "IntlPayStandardMoneyMover";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayMt101Transaction"] = "IntlPayMT101Transaction";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayTransNonSterling"] = "IntlPayTransNonSterling";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayTransRateNonSterling"] = "IntlPayTransRateNonSterling";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignUrgentEuEuroBic"] = "IntlPayForeignUrgentEUEuroBIC";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayForeignUrgentEuEuroNoBic"] = "IntlPayForeignUrgentEUEuroNoBIC";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayUrgentPaymentGroup"] = "IntlPayUrgentPaymentGroup";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayUrgentPaymentUk"] = "IntlPayUrgentPaymentUK";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayUsaPayUrgent"] = "IntlPayUSAPayUrgent";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayCurrencyPurchase"] = "IntlPayCurrencyPurchase";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayWorldpayPayment"] = "IntlPayWorldpayPayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["IntlPayCurrencyWithdraw"] = "IntlPayCurrencyWithdraw";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayBankDetailsWrong"] = "InvPayBankDetailsWrong";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayForeignBcnr"] = "InvPayForeignBCNR";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayForeignRecall"] = "InvPayForeignRecall";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvGeneralInq"] = "InvGeneralInq";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvOldInstruction"] = "InvOldInstruction";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayPaymentRecall"] = "InvPayPaymentRecall";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayReturnDebitXvLess"] = "InvPayReturnDebitXVLess";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayReturnDebitXvPlus"] = "InvPayReturnDebitXVPlus";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayStopPayment"] = "InvPayStopPayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["InvPayStandingOrdUnpaid"] = "InvPayStandingOrdUnpaid";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepAccess"] = "SafeKeepAccess";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepDeedMedium"] = "SafeKeepDeedMedium";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepingEnvelope"] = "SafeKeepingEnvelope";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepingInspection"] = "SafeKeepingInspection";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepingLargeItem"] = "SafeKeepingLargeItem";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepMultipleItems"] = "SafeKeepMultipleItems";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepingParcel"] = "SafeKeepingParcel";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepDeedSmall"] = "SafeKeepDeedSmall";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepOneItem"] = "SafeKeepOneItem";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SafeKeepSafeCustody"] = "SafeKeepSafeCustody";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanArrangementFeePc"] = "LoanArrangementFeePC";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanArrangement"] = "LoanArrangement";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanEarlyRepayment"] = "LoanEarlyRepayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanLatePayment"] = "LoanLatePayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanSmeUnsecuredLoan"] = "LoanSMEUnsecuredLoan";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["LoanTieredArrangement"] = "LoanTieredArrangement";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["NightSafeNightSafeBankOpen"] = "NightSafeNightSafeBankOpen";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["NightSafeCreditSub5K"] = "NightSafeCreditSub5K";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["NightSafeNightSafe"] = "NightSafeNightSafe";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["NightSafeNightSafePaidIn"] = "NightSafeNightSafePaidIn";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OverdraftAnnualReview"] = "OverdraftAnnualReview";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OverdraftTempOverdraft"] = "OverdraftTempOverdraft";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OverdraftUnauthorisedBorrowing"] = "OverdraftUnauthorisedBorrowing";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["PoPostOfficeCounterCredit"] = "POPostOfficeCounterCredit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["PoPostOfficeCashCredit"] = "POPostOfficeCashCredit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["PoPostOfficeCashOut"] = "POPostOfficeCashOut";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["PoPostOfficeWithdrawal"] = "POPostOfficeWithdrawal";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqBookTheftLossAllStopped"] = "ChqBookTheftLossAllStopped";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqIssuedCurrencyAcc"] = "ChqIssuedCurrencyAcc";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqCopy"] = "ChqCopy";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqDraft"] = "ChqDraft";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqIn"] = "ChqIn";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqDraftSterling"] = "ChqDraftSterling";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqOutIssued"] = "ChqOutIssued";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqSpecialChqPresentation"] = "ChqSpecialChqPresentation";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqCounterCheque"] = "ChqCounterCheque";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqChequeswithStatement"] = "ChqChequeswithStatement";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqStopped"] = "ChqStopped";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqTrans"] = "ChqTrans";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqDraftFx"] = "ChqDraftFX";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignCourier"] = "ChqForeignCourier";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegTenThou"] = "ChqForeignNegTenThou";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegHundred"] = "ChqForeignNegHundred";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChequeForeignBankDivi"] = "ChequeForeignBankDivi";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegFiftyThou"] = "ChqForeignNegFiftyThou";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqPensionCheque"] = "ChqPensionCheque";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChequeForeignOtherDivi"] = "ChequeForeignOtherDivi";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegFiveThou"] = "ChqForeignNegFiveThou";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignNegMax"] = "ChqForeignNegMax";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqForeignGbpmmdPlus"] = "ChqForeignGBPMMDPlus";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqGiftCheque"] = "ChqGiftCheque";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqCounterLodgement"] = "ChqCounterLodgement";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqCashDropLodgement"] = "ChqCashDropLodgement";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqChequePhotocopy"] = "ChqChequePhotocopy";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqPostOfficeCredit"] = "ChqPostOfficeCredit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqPostOfficeChequeCollected"] = "ChqPostOfficeChequeCollected";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqChequeRetrieval"] = "ChqChequeRetrieval";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqReconcilliationPerTrans"] = "ChqReconcilliationPerTrans";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqSpecialPresentationCount"] = "ChqSpecialPresentationCount";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqSpecialPresentationPtt"] = "ChqSpecialPresentationPTT";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqUnpaidCharge"] = "ChqUnpaidCharge";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqUnpaidTransIn"] = "ChqUnpaidTransIn";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqUnpaidTransOut"] = "ChqUnpaidTransOut";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ChqUnpaidCheque"] = "ChqUnpaidCheque";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportAuditLetter"] = "ReportAuditLetter";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportFaxAdviceAdditional"] = "ReportFAXAdviceAdditional";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportTelAdviceAdditional"] = "ReportTelAdviceAdditional";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCreditHistory"] = "ReportCreditHistory";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCertInterestDuplicate"] = "ReportCertInterestDuplicate";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCertInterest"] = "ReportCertInterest";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCreditHistoryAdditionalInYear"] = "ReportCreditHistoryAdditionalInYear";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportForeignStatusEnqElec"] = "ReportForeignStatusEnqElec";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportForeignStatusEnq"] = "ReportForeignStatusEnq";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportCashBackorInterestAnal"] = "ReportCashBackorInterestAnal";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementChqDaily"] = "ReportStatementChqDaily";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementChqFortnightly"] = "ReportStatementChqFortnightly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementChqMonthly"] = "ReportStatementChqMonthly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementChqWeekly"] = "ReportStatementChqWeekly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementAndDiviChq"] = "ReportStatementAndDiviChq";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportReference"] = "ReportReference";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportReferralItem"] = "ReportReferralItem";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementByAtm"] = "ReportStatementByATM";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementByBranch"] = "ReportStatementByBranch";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementCopyRegular"] = "ReportStatementCopyRegular";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatusEnquiry"] = "ReportStatusEnquiry";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementFrequent"] = "ReportStatementFrequent";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementMonthly"] = "ReportStatementMonthly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementCopy1"] = "ReportStatementCopy1";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementToBranch"] = "ReportStatementToBranch";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportSmsTextMiniStatementorAlert"] = "ReportSMSTextMiniStatementorAlert";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportStatementFortnightly"] = "ReportStatementFortnightly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportSmsTextMiniStatementWoM"] = "ReportSMSTextMiniStatementWoM";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportSmsTextAlertBalance"] = "ReportSMSTextAlertBalance";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportSmsTextAlert"] = "ReportSMSTextAlert";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportTaxCert"] = "ReportTaxCert";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportWeeklyStatement"] = "ReportWeeklyStatement";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ReportTextMessageBanking"] = "ReportTextMessageBanking";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaCancellation"] = "SEPACancellation";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaBranch"] = "SEPABranch";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaCredit"] = "SEPACredit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaDirectDebit"] = "SEPADirectDebit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaIn"] = "SEPAIn";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaEuro"] = "SEPAEuro";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaOut"] = "SEPAOut";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaUnpaid"] = "SEPAUnpaid";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaWinbitsAnnualService"] = "SEPAWinbitsAnnual Service";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["SepaWinbitsTransaction"] = "SEPAWinbitsTransaction";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBillPaymentBranch"] = "TransBillPaymentBranch";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBillCollect"] = "TransBillCollect";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTelephoneBillPayment"] = "TransTelephoneBillPayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBankPayment"] = "TransBankPayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBillPaymentTelephone"] = "TransBillPaymentTelephone";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCorrespondentBankFee"] = "TransCorrespondentBankFee";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCreditTransferUkDifferent"] = "TransCreditTransferUKDifferent";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCreditTransferUkSame"] = "TransCreditTransferUKSame";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCredit"] = "TransCredit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransCreditTransfer"] = "TransCreditTransfer";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBranchCredit"] = "TransBranchCredit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransDebit"] = "TransDebit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransDebCardDeb"] = "TransDebCardDeb";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransUkDirDeb"] = "TransUKDirDeb";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransManualDeb"] = "TransManualDeb";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransBuyForeignWithGbp"] = "TransBuyForeignWithGBP";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransGoodValueReq"] = "TransGoodValueReq";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransSwiftOutUkForeign"] = "TransSWIFTOutUKForeign";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransInconpleteInstruction"] = "TransInconpleteInstruction";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransManualEntries"] = "TransManualEntries";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransManualTrans"] = "TransManualTrans";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransNonSterling"] = "TransNonSterling";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransPosSaleForeign"] = "TransPOSSaleForeign";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransPriPaymentPost"] = "TransPriPaymentPost";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransPosSaleUk"] = "TransPOSSaleUK";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransReturnPayment"] = "TransReturnPayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransReconciliationPerTrans"] = "TransReconciliationPerTrans";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransStandingOrdAdmin"] = "TransStandingOrdAdmin";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransStandingOrd"] = "TransStandingOrd";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransStandingOrdManPay"] = "TransStandingOrdManPay";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTravellersChqOtherBank"] = "TransTravellersChqOtherBank";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTelBusiPriPaymentForeignToUkAcc"] = "TransTelBusiPriPaymentForeignToUKAcc";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTeleItem"] = "TransTeleItem";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTelBusiPriPaymentToGrpAcc"] = "TransTelBusiPriPaymentToGrpAcc";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTravellersChqRate"] = "TransTravellersChqRate";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTransferExGroup"] = "TransTransferExGroup";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransUnauthorisedPaidTrans"] = "TransUnauthorisedPaidTrans";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransUrgentPaymentPostal"] = "TransUrgentPaymentPostal";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransUnpaidTrans"] = "TransUnpaidTrans";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransTelBusiPriPaymentToNonGrpAcc"] = "TransTelBusiPriPaymentToNonGrpAcc";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["TransSwiftOutNonEeaSterling"] = "TransSWIFTOutNonEEASterling";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoAutoCredit"] = "AutoAutoCredit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoAutomatedEntries"] = "AutoAutomatedEntries";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoAutoCreditPhoneInet"] = "AutoAutoCreditPhoneInet";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoAutomatedTrans"] = "AutoAutomatedTrans";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoDebitCardCommercial"] = "AutoDebitCardCommercial";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["AutoFpsAutoCredit"] = "AutoFPSAutoCredit";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["VisaConvertAbroadForeign"] = "VisaConvertAbroadForeign";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["VisaBureauDeChange"] = "VisaBureauDeChange";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["VisaTravellersChqorCurrency"] = "VisaTravellersChqorCurrency";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInternetBillPayment"] = "OnlineInternetBillPayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBusinessOnlineEuroPayment"] = "OnlineBusinessOnlineEuroPayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBusinessOnlineUrgentEuroPayment"] = "OnlineBusinessOnlineUrgentEuroPayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBusinessOnlineForeignPayment"] = "OnlineBusinessOnlineForeignPayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInterbankTransfer"] = "OnlineInterbankTransfer";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInterbankPerTransfer"] = "OnlineInterbankPerTransfer";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInterbranchTransfer"] = "OnlineInterbranchTransfer";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineInterbranchPerTransfer"] = "OnlineInterbranchPerTransfer";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineSubscriptionMonthly"] = "OnlineSubscriptionMonthly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBankingPayment"] = "OnlineBankingPayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBankingSubscription"] = "OnlineBankingSubscription";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePosSale"] = "OnlinePOSSale";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustAncillarys"] = "OnlinePersonalCustAncillarys";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustService"] = "OnlinePersonalCustService";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustOverlimits"] = "OnlinePersonalCustOverlimits";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineReplacementCardReader"] = "OnlineReplacementCardReader";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustSetUp"] = "OnlinePersonalCustSetUp";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePersonalCustTransaction"] = "OnlinePersonalCustTransaction";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePaymentinGbPtoUk"] = "OnlinePaymentinGBPtoUK";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineUrgentPayment"] = "OnlineUrgentPayment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlinePaymentinUsDtoUs"] = "OnlinePaymentinUSDtoUS";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["OnlineBulkDirectDebSterling"] = "OnlineBulkDirectDebSterling";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqSent"] = "ForeignChqSent";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqSelf"] = "ForeignChqSelf";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqEncashment"] = "ForeignChqEncashment";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxInwardsCust"] = "ForeignFXInwardsCust";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxTransfersRoi"] = "ForeignFXTransfersROI";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxForwardTrans"] = "ForeignFXForwardTrans";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxTransfersBoi"] = "ForeignFXTransfersBOI";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignExMaintenance"] = "ForeignExMaintenance";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxInwardsNonCust"] = "ForeignFXInwardsNonCust";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignFxOutwards"] = "ForeignFXOutwards";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignPurchase"] = "ForeignPurchase";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignStatusRep"] = "ForeignStatusRep";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqDraft"] = "ForeignChqDraft";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqCLess"] = "ForeignChqCLess";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqMLess"] = "ForeignChqMLess";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqOther"] = "ForeignChqOther";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqMPlus"] = "ForeignChqMPlus";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ForeignChqCcc"] = "ForeignChqCCC";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCAccountFee"] = "ServiceCAccountFee";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCAccountFeeMonthly"] = "ServiceCAccountFeeMonthly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCAccountFeeQuarterly"] = "ServiceCAccountFeeQuarterly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCBalanceHandling"] = "ServiceCBalanceHandling";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCFixedTariff"] = "ServiceCFixedTariff";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCBusiDepAccBreakage"] = "ServiceCBusiDepAccBreakage";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCMonitorDaily"] = "ServiceCMonitorDaily";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCManagementFee"] = "ServiceCManagementFee";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCMinimumMonthlyFee"] = "ServiceCMinimumMonthlyFee";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCMonitorMonthly"] = "ServiceCMonitorMonthly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCMonitorWeekly"] = "ServiceCMonitorWeekly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCSecurityFee"] = "ServiceCSecurityFee";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCmt940AccountFirst"] = "ServiceCMT940AccountFirst";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCmt940AccountSubsequent"] = "ServiceCMT940AccountSubsequent";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["ServiceCOther"] = "ServiceCOther";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCoinHandling"] = "CounterCoinHandling";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashIn"] = "CounterCashIn";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashInNotUs"] = "CounterCashInNotUs";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashOut"] = "CounterCashOut";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashX"] = "CounterCashX";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterForeignCashMax"] = "CounterForeignCashMax";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterForeignNoteHandling"] = "CounterForeignNoteHandling";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterForeignCashOut"] = "CounterForeignCashOut";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashFeeRate"] = "CounterCashFeeRate";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterForeignCashOutTx"] = "CounterForeignCashOutTx";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCounterLodgement"] = "CounterCounterLodgement";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashDropLodgement"] = "CounterCashDropLodgement";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterNotesLodged"] = "CounterNotesLodged";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterNotesOut"] = "CounterNotesOut";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashInOwn"] = "CounterCashInOwn";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterPaidTrans"] = "CounterPaidTrans";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum["CounterCashFeePercent"] = "CounterCashFeePercent";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = {}));
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail
/**
 * Fee Detail
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeSubDetails" }),
        __metadata("design:type", GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "feeSubDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeType" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "feeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Other" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "other", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail };
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum["Promotional"] = "Promotional";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum["Regular"] = "Regular";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum = {}));
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails
/**
 * Fee Details
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeDetail" }),
        __metadata("design:type", GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetailsFeeDetail)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails.prototype, "feeDetail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeSubType" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails.prototype, "feeSubType", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails };
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees
/**
 * Fees
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeDetails", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFeesFeeDetails }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "feeDetails", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeHigherTier" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "feeHigherTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeeLowerTier" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "feeLowerTier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees.prototype, "stopPromotionOrFutureTerms", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees };
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum["Promotional"] = "Promotional";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum["Regular"] = "Regular";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesProductStateEnum = {}));
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges
/**
 * Fees And Charges
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Fees" }),
        __metadata("design:type", GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndChargesFees)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges.prototype, "fees", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductState" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges.prototype, "productState", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges };
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum["OneYear"] = "1 year";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum["TwoYears"] = "2 years";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum["ThreeYears"] = "3 years";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum["FourYears"] = "4 years";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum["FiveYears"] = "5 years";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingLoanLengthIncrementEnum = {}));
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum["Apr"] = "APR";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum["Aer"] = "AER";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum["Gross"] = "Gross";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum["Net"] = "Net";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum["RepApr"] = "RepApr";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRateComparisonTypeEnum = {}));
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum["Daily"] = "Daily";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum["Flexible"] = "Flexible";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum["Fortnightly"] = "Fortnightly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum["HalfYearly"] = "HalfYearly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum["Monthly"] = "Monthly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum["Quarterly"] = "Quarterly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum["Weekly"] = "Weekly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum["Yearly"] = "Yearly";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingRepaymentFrequencyEnum = {}));
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum["Pound5000"] = "\u00A35000";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum["Pound10000"] = "\u00A310000";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum["Pound15000"] = "\u00A315000";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum["Pound20000"] = "\u00A320000";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum["Pound25000"] = "\u00A325000";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum["Other"] = "Other";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum["TierMaximum"] = "TierMaximum";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum["TierMinimum"] = "TierMinimum";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricingSizeIncrementEnum = {}));
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing
/**
 * Loan Pricing
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IndicativeRate" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing.prototype, "indicativeRate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanLengthIncrement" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing.prototype, "loanLengthIncrement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanLengthIncrementLower" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing.prototype, "loanLengthIncrementLower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanLengthIncrementUpper" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing.prototype, "loanLengthIncrementUpper", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanSizeBandLower" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing.prototype, "loanSizeBandLower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanSizeBandUpper" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing.prototype, "loanSizeBandUpper", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Negotiable" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing.prototype, "negotiable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RateComparisonType" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing.prototype, "rateComparisonType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RepaymentFrequency" }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing.prototype, "repaymentFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SizeIncrement" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing.prototype, "sizeIncrement", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing };
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum["FutureMultipleTerms"] = "FutureMultipleTerms";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum["Promotional"] = "Promotional";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum["Regular"] = "Regular";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemProductStateEnum = {}));
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem
/**
 * Loan Item
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CCARegulatedEntity" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem.prototype, "ccaRegulatedEntity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=DateOfChange" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem.prototype, "dateOfChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsALowInterestRepaymentStartPossible" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem.prototype, "isALowInterestRepaymentStartPossible", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsThisAnInterestOnlyLoan" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem.prototype, "isThisAnInterestOnlyLoan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LengthPromotionalInDays" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem.prototype, "lengthPromotionalInDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanPricing", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItemLoanPricing }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem.prototype, "loanPricing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductState" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem.prototype, "productState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem.prototype, "startPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopPromotionOrFutureTerms" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem.prototype, "stopPromotionOrFutureTerms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WillTheLoanBePaidInTrancheDrawdowns" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem.prototype, "willTheLoanBePaidInTrancheDrawdowns", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem };
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum["Uk"] = "UK";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum["Eu"] = "EU";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrandTrademarkIpoCodeEnum = {}));
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand
/**
 * Brand
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrademarkID" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand.prototype, "trademarkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TrademarkIPOCode" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand.prototype, "trademarkIpoCode", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand };
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName
/**
 * Organisation Name
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LegalName" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName.prototype, "legalName", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName };
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation
/**
 * Parent organisation
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BIC" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation.prototype, "bic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LEI" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation.prototype, "lei", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OrganisationName" }),
        __metadata("design:type", GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisationOrganisationName)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation.prototype, "organisationName", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation };
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation
/**
 * Organisation
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Brand" }),
        __metadata("design:type", GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationBrand)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ParentOrganisation" }),
        __metadata("design:type", GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisationParentOrganisation)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation.prototype, "parentOrganisation", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation };
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["AgricultureSector"] = "AgricultureSector";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["AllSegmentsCorporate"] = "AllSegmentsCorporate";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["Corporate"] = "Corporate";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["FixedGroup"] = "FixedGroup";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["FlexibleBusinessLoan"] = "FlexibleBusinessLoan";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["GovernmentScheme"] = "GovernmentScheme";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["NewCustomersOnly"] = "NewCustomersOnly";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["SmallLoan"] = "SmallLoan";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["SpecialisedSector"] = "SpecialisedSector";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum["SwitchersOnly"] = "SwitchersOnly";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductSegmentEnum = {}));
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum["FlexibleBusinessLoan"] = "FlexibleBusinessLoan";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum["SmallBusinessLoan"] = "SmallBusinessLoan";
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum["SmeUnsecuredLoan"] = "SmeUnsecuredLoan";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataProductTypeNameEnum = {}));
// GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData
/**
 * SME Loan
**/
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ArrearsTreatment" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "arrearsTreatment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Benefits" }),
        __metadata("design:type", GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataBenefits)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "benefits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Currency" }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CustomerAccessChannels" }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "customerAccessChannels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Eligibility" }),
        __metadata("design:type", GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataEligibility)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "eligibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FeesAndCharges", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataFeesAndCharges }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "feesAndCharges", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LoanItem", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataLoanItem }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "loanItem", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumLoanAmount" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "maximumLoanAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaximumLoanTerm" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "maximumLoanTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumLoanAmount" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "minimumLoanAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MinimumLoanTerm" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "minimumLoanTerm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Organisation" }),
        __metadata("design:type", GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonDataOrganisation)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "organisation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaymentHoliday" }),
        __metadata("design:type", Boolean)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "paymentHoliday", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductDescription" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productDescription", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductIdentifier" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productIdentifier", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductName" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductSegment" }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productSegment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductTypeName" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productTypeName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductURL" }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "productUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TsandCs" }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData.prototype, "tsandCs", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData };
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum["UseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions"] = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataAgreementEnum = {}));
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum["HttpsWwwOpenbankingOrgUkOpenLicence"] = "https://www.openbanking.org.uk/open-licence";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataLicenseEnum = {}));
export var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum;
(function (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum) {
    GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum["HttpsWwwOpenbankingOrgUkTerms"] = "https://www.openbanking.org.uk/terms";
})(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum || (GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaDataTermsOfUseEnum = {}));
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Agreement" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "agreement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdated" }),
        __metadata("design:type", Date)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "lastUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=License" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TermsOfUse" }),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "termsOfUse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TotalResults" }),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData.prototype, "totalResults", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData };
var GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson, _super);
    function GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonData }),
        __metadata("design:type", Array)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=meta" }),
        __metadata("design:type", GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonMetaData)
    ], GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson.prototype, "meta", void 0);
    return GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson };
var GetUnsecuredSmeLoansRequest = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoansRequest, _super);
    function GetUnsecuredSmeLoansRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnsecuredSmeLoansHeaders)
    ], GetUnsecuredSmeLoansRequest.prototype, "headers", void 0);
    return GetUnsecuredSmeLoansRequest;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoansRequest };
var GetUnsecuredSmeLoansResponse = /** @class */ (function (_super) {
    __extends(GetUnsecuredSmeLoansResponse, _super);
    function GetUnsecuredSmeLoansResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnsecuredSmeLoans400ErrorObject)
    ], GetUnsecuredSmeLoansResponse.prototype, "fourHundredErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnsecuredSmeLoans408ErrorObject)
    ], GetUnsecuredSmeLoansResponse.prototype, "fourHundredAndEightErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnsecuredSmeLoans429ErrorObject)
    ], GetUnsecuredSmeLoansResponse.prototype, "fourHundredAndTwentyNineErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnsecuredSmeLoans500ErrorObject)
    ], GetUnsecuredSmeLoansResponse.prototype, "fiveHundredErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnsecuredSmeLoans503ErrorObject)
    ], GetUnsecuredSmeLoansResponse.prototype, "fiveHundredAndThreeErrorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetUnsecuredSmeLoansResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnsecuredSmeLoansErrorObject)
    ], GetUnsecuredSmeLoansResponse.prototype, "errorObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJson)
    ], GetUnsecuredSmeLoansResponse.prototype, "getUnsecuredSmeLoans200ApplicationPrsOpenbankingOpendataV13PlusJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetUnsecuredSmeLoansResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetUnsecuredSmeLoansResponse.prototype, "statusCode", void 0);
    return GetUnsecuredSmeLoansResponse;
}(SpeakeasyBase));
export { GetUnsecuredSmeLoansResponse };

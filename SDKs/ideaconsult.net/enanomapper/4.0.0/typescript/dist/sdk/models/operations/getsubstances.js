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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetSubstancesPathParams = /** @class */ (function (_super) {
    __extends(GetSubstancesPathParams, _super);
    function GetSubstancesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=db" }),
        __metadata("design:type", String)
    ], GetSubstancesPathParams.prototype, "db", void 0);
    return GetSubstancesPathParams;
}(SpeakeasyBase));
export { GetSubstancesPathParams };
export var GetSubstancesTypeEnum;
(function (GetSubstancesTypeEnum) {
    GetSubstancesTypeEnum["Substancetype"] = "substancetype";
    GetSubstancesTypeEnum["Name"] = "name";
    GetSubstancesTypeEnum["Like"] = "like";
    GetSubstancesTypeEnum["Regexp"] = "regexp";
    GetSubstancesTypeEnum["Uuif"] = "uuif";
    GetSubstancesTypeEnum["CompTox"] = "CompTox";
    GetSubstancesTypeEnum["Doi"] = "DOI";
    GetSubstancesTypeEnum["Reliability"] = "reliability";
    GetSubstancesTypeEnum["PurposeFlag"] = "purposeFlag";
    GetSubstancesTypeEnum["StudyResultType"] = "studyResultType";
    GetSubstancesTypeEnum["IsRobustStudy"] = "isRobustStudy";
    GetSubstancesTypeEnum["Citation"] = "citation";
    GetSubstancesTypeEnum["Citationowner"] = "citationowner";
    GetSubstancesTypeEnum["Topcategory"] = "topcategory";
    GetSubstancesTypeEnum["Endpointcategory"] = "endpointcategory";
    GetSubstancesTypeEnum["Params"] = "params";
    GetSubstancesTypeEnum["OwnerName"] = "owner_name";
    GetSubstancesTypeEnum["OwnerUuid"] = "owner_uuid";
    GetSubstancesTypeEnum["Related"] = "related";
    GetSubstancesTypeEnum["Reference"] = "reference";
    GetSubstancesTypeEnum["Facet"] = "facet";
})(GetSubstancesTypeEnum || (GetSubstancesTypeEnum = {}));
var GetSubstancesQueryParams = /** @class */ (function (_super) {
    __extends(GetSubstancesQueryParams, _super);
    function GetSubstancesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=addDummySubstance" }),
        __metadata("design:type", Boolean)
    ], GetSubstancesQueryParams.prototype, "addDummySubstance", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=bundle_uri" }),
        __metadata("design:type", String)
    ], GetSubstancesQueryParams.prototype, "bundleUri", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=compound_uri" }),
        __metadata("design:type", String)
    ], GetSubstancesQueryParams.prototype, "compoundUri", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSubstancesQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetSubstancesQueryParams.prototype, "pagesize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetSubstancesQueryParams.prototype, "search", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=studysummary" }),
        __metadata("design:type", Boolean)
    ], GetSubstancesQueryParams.prototype, "studysummary", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetSubstancesQueryParams.prototype, "type", void 0);
    return GetSubstancesQueryParams;
}(SpeakeasyBase));
export { GetSubstancesQueryParams };
var GetSubstancesRequest = /** @class */ (function (_super) {
    __extends(GetSubstancesRequest, _super);
    function GetSubstancesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSubstancesPathParams)
    ], GetSubstancesRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSubstancesQueryParams)
    ], GetSubstancesRequest.prototype, "queryParams", void 0);
    return GetSubstancesRequest;
}(SpeakeasyBase));
export { GetSubstancesRequest };
var GetSubstancesResponse = /** @class */ (function (_super) {
    __extends(GetSubstancesResponse, _super);
    function GetSubstancesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSubstancesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSubstancesResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Substance)
    ], GetSubstancesResponse.prototype, "substance", void 0);
    return GetSubstancesResponse;
}(SpeakeasyBase));
export { GetSubstancesResponse };

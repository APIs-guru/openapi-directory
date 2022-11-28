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
import * as shared from "../shared";
var GetSubstanceStudyPathParams = /** @class */ (function (_super) {
    __extends(GetSubstanceStudyPathParams, _super);
    function GetSubstanceStudyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=db" }),
        __metadata("design:type", String)
    ], GetSubstanceStudyPathParams.prototype, "db", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" }),
        __metadata("design:type", String)
    ], GetSubstanceStudyPathParams.prototype, "uuid", void 0);
    return GetSubstanceStudyPathParams;
}(SpeakeasyBase));
export { GetSubstanceStudyPathParams };
export var GetSubstanceStudyTopEnum;
(function (GetSubstanceStudyTopEnum) {
    GetSubstanceStudyTopEnum["PChem"] = "P-CHEM";
    GetSubstanceStudyTopEnum["Ecotox"] = "ECOTOX";
    GetSubstanceStudyTopEnum["EnvFate"] = "ENV FATE";
    GetSubstanceStudyTopEnum["Tox"] = "TOX";
    GetSubstanceStudyTopEnum["Exposure"] = "EXPOSURE";
})(GetSubstanceStudyTopEnum || (GetSubstanceStudyTopEnum = {}));
var GetSubstanceStudyQueryParams = /** @class */ (function (_super) {
    __extends(GetSubstanceStudyQueryParams, _super);
    function GetSubstanceStudyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], GetSubstanceStudyQueryParams.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=investigation_uuid" }),
        __metadata("design:type", String)
    ], GetSubstanceStudyQueryParams.prototype, "investigationUuid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSubstanceStudyQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetSubstanceStudyQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=property" }),
        __metadata("design:type", String)
    ], GetSubstanceStudyQueryParams.prototype, "property", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=property_uri" }),
        __metadata("design:type", String)
    ], GetSubstanceStudyQueryParams.prototype, "propertyUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=top" }),
        __metadata("design:type", String)
    ], GetSubstanceStudyQueryParams.prototype, "top", void 0);
    return GetSubstanceStudyQueryParams;
}(SpeakeasyBase));
export { GetSubstanceStudyQueryParams };
var GetSubstanceStudyRequest = /** @class */ (function (_super) {
    __extends(GetSubstanceStudyRequest, _super);
    function GetSubstanceStudyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubstanceStudyPathParams)
    ], GetSubstanceStudyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubstanceStudyQueryParams)
    ], GetSubstanceStudyRequest.prototype, "queryParams", void 0);
    return GetSubstanceStudyRequest;
}(SpeakeasyBase));
export { GetSubstanceStudyRequest };
var GetSubstanceStudyResponse = /** @class */ (function (_super) {
    __extends(GetSubstanceStudyResponse, _super);
    function GetSubstanceStudyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSubstanceStudyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSubstanceStudyResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubstanceStudy)
    ], GetSubstanceStudyResponse.prototype, "substanceStudy", void 0);
    return GetSubstanceStudyResponse;
}(SpeakeasyBase));
export { GetSubstanceStudyResponse };

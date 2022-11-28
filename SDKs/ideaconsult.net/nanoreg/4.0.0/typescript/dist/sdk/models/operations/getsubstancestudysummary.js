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
var GetSubstanceStudySummaryPathParams = /** @class */ (function (_super) {
    __extends(GetSubstanceStudySummaryPathParams, _super);
    function GetSubstanceStudySummaryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=db" }),
        __metadata("design:type", String)
    ], GetSubstanceStudySummaryPathParams.prototype, "db", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" }),
        __metadata("design:type", String)
    ], GetSubstanceStudySummaryPathParams.prototype, "uuid", void 0);
    return GetSubstanceStudySummaryPathParams;
}(SpeakeasyBase));
export { GetSubstanceStudySummaryPathParams };
export var GetSubstanceStudySummaryTopEnum;
(function (GetSubstanceStudySummaryTopEnum) {
    GetSubstanceStudySummaryTopEnum["PChem"] = "P-CHEM";
    GetSubstanceStudySummaryTopEnum["Ecotox"] = "ECOTOX";
    GetSubstanceStudySummaryTopEnum["EnvFate"] = "ENV FATE";
    GetSubstanceStudySummaryTopEnum["Tox"] = "TOX";
    GetSubstanceStudySummaryTopEnum["Exposure"] = "EXPOSURE";
})(GetSubstanceStudySummaryTopEnum || (GetSubstanceStudySummaryTopEnum = {}));
var GetSubstanceStudySummaryQueryParams = /** @class */ (function (_super) {
    __extends(GetSubstanceStudySummaryQueryParams, _super);
    function GetSubstanceStudySummaryQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" }),
        __metadata("design:type", String)
    ], GetSubstanceStudySummaryQueryParams.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSubstanceStudySummaryQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetSubstanceStudySummaryQueryParams.prototype, "pagesize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=property" }),
        __metadata("design:type", String)
    ], GetSubstanceStudySummaryQueryParams.prototype, "property", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=property_uri" }),
        __metadata("design:type", String)
    ], GetSubstanceStudySummaryQueryParams.prototype, "propertyUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=result" }),
        __metadata("design:type", Boolean)
    ], GetSubstanceStudySummaryQueryParams.prototype, "result", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=top" }),
        __metadata("design:type", String)
    ], GetSubstanceStudySummaryQueryParams.prototype, "top", void 0);
    return GetSubstanceStudySummaryQueryParams;
}(SpeakeasyBase));
export { GetSubstanceStudySummaryQueryParams };
var GetSubstanceStudySummaryRequest = /** @class */ (function (_super) {
    __extends(GetSubstanceStudySummaryRequest, _super);
    function GetSubstanceStudySummaryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubstanceStudySummaryPathParams)
    ], GetSubstanceStudySummaryRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubstanceStudySummaryQueryParams)
    ], GetSubstanceStudySummaryRequest.prototype, "queryParams", void 0);
    return GetSubstanceStudySummaryRequest;
}(SpeakeasyBase));
export { GetSubstanceStudySummaryRequest };
var GetSubstanceStudySummaryResponse = /** @class */ (function (_super) {
    __extends(GetSubstanceStudySummaryResponse, _super);
    function GetSubstanceStudySummaryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSubstanceStudySummaryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSubstanceStudySummaryResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubstanceStudySummary)
    ], GetSubstanceStudySummaryResponse.prototype, "substanceStudySummary", void 0);
    return GetSubstanceStudySummaryResponse;
}(SpeakeasyBase));
export { GetSubstanceStudySummaryResponse };

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
var GetSubstanceCompositionPathParams = /** @class */ (function (_super) {
    __extends(GetSubstanceCompositionPathParams, _super);
    function GetSubstanceCompositionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=db" }),
        __metadata("design:type", String)
    ], GetSubstanceCompositionPathParams.prototype, "db", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" }),
        __metadata("design:type", String)
    ], GetSubstanceCompositionPathParams.prototype, "uuid", void 0);
    return GetSubstanceCompositionPathParams;
}(SpeakeasyBase));
export { GetSubstanceCompositionPathParams };
var GetSubstanceCompositionQueryParams = /** @class */ (function (_super) {
    __extends(GetSubstanceCompositionQueryParams, _super);
    function GetSubstanceCompositionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" }),
        __metadata("design:type", Boolean)
    ], GetSubstanceCompositionQueryParams.prototype, "all", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetSubstanceCompositionQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" }),
        __metadata("design:type", Number)
    ], GetSubstanceCompositionQueryParams.prototype, "pagesize", void 0);
    return GetSubstanceCompositionQueryParams;
}(SpeakeasyBase));
export { GetSubstanceCompositionQueryParams };
var GetSubstanceCompositionRequest = /** @class */ (function (_super) {
    __extends(GetSubstanceCompositionRequest, _super);
    function GetSubstanceCompositionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubstanceCompositionPathParams)
    ], GetSubstanceCompositionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSubstanceCompositionQueryParams)
    ], GetSubstanceCompositionRequest.prototype, "queryParams", void 0);
    return GetSubstanceCompositionRequest;
}(SpeakeasyBase));
export { GetSubstanceCompositionRequest };
var GetSubstanceCompositionResponse = /** @class */ (function (_super) {
    __extends(GetSubstanceCompositionResponse, _super);
    function GetSubstanceCompositionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSubstanceCompositionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSubstanceCompositionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SubstanceComposition)
    ], GetSubstanceCompositionResponse.prototype, "substanceComposition", void 0);
    return GetSubstanceCompositionResponse;
}(SpeakeasyBase));
export { GetSubstanceCompositionResponse };

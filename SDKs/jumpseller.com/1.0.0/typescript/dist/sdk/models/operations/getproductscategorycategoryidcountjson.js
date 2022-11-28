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
var GetProductsCategoryCategoryIdCountJsonPathParams = /** @class */ (function (_super) {
    __extends(GetProductsCategoryCategoryIdCountJsonPathParams, _super);
    function GetProductsCategoryCategoryIdCountJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category_id" }),
        __metadata("design:type", Number)
    ], GetProductsCategoryCategoryIdCountJsonPathParams.prototype, "categoryId", void 0);
    return GetProductsCategoryCategoryIdCountJsonPathParams;
}(SpeakeasyBase));
export { GetProductsCategoryCategoryIdCountJsonPathParams };
var GetProductsCategoryCategoryIdCountJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetProductsCategoryCategoryIdCountJsonQueryParams, _super);
    function GetProductsCategoryCategoryIdCountJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetProductsCategoryCategoryIdCountJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetProductsCategoryCategoryIdCountJsonQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetProductsCategoryCategoryIdCountJsonQueryParams.prototype, "login", void 0);
    return GetProductsCategoryCategoryIdCountJsonQueryParams;
}(SpeakeasyBase));
export { GetProductsCategoryCategoryIdCountJsonQueryParams };
var GetProductsCategoryCategoryIdCountJsonRequest = /** @class */ (function (_super) {
    __extends(GetProductsCategoryCategoryIdCountJsonRequest, _super);
    function GetProductsCategoryCategoryIdCountJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsCategoryCategoryIdCountJsonPathParams)
    ], GetProductsCategoryCategoryIdCountJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsCategoryCategoryIdCountJsonQueryParams)
    ], GetProductsCategoryCategoryIdCountJsonRequest.prototype, "queryParams", void 0);
    return GetProductsCategoryCategoryIdCountJsonRequest;
}(SpeakeasyBase));
export { GetProductsCategoryCategoryIdCountJsonRequest };
var GetProductsCategoryCategoryIdCountJsonResponse = /** @class */ (function (_super) {
    __extends(GetProductsCategoryCategoryIdCountJsonResponse, _super);
    function GetProductsCategoryCategoryIdCountJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProductsCategoryCategoryIdCountJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProductsCategoryCategoryIdCountJsonResponse.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProductsCategoryCategoryIdCountJsonResponse.prototype, "notFound", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProductsCategoryCategoryIdCountJsonResponse.prototype, "statusCode", void 0);
    return GetProductsCategoryCategoryIdCountJsonResponse;
}(SpeakeasyBase));
export { GetProductsCategoryCategoryIdCountJsonResponse };

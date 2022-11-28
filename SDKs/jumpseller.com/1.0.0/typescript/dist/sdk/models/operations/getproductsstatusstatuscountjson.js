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
export var GetProductsStatusStatusCountJsonStatusEnum;
(function (GetProductsStatusStatusCountJsonStatusEnum) {
    GetProductsStatusStatusCountJsonStatusEnum["Available"] = "available";
    GetProductsStatusStatusCountJsonStatusEnum["NotAvailable"] = "not-available";
    GetProductsStatusStatusCountJsonStatusEnum["Disabled"] = "disabled";
})(GetProductsStatusStatusCountJsonStatusEnum || (GetProductsStatusStatusCountJsonStatusEnum = {}));
var GetProductsStatusStatusCountJsonPathParams = /** @class */ (function (_super) {
    __extends(GetProductsStatusStatusCountJsonPathParams, _super);
    function GetProductsStatusStatusCountJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=status" }),
        __metadata("design:type", String)
    ], GetProductsStatusStatusCountJsonPathParams.prototype, "status", void 0);
    return GetProductsStatusStatusCountJsonPathParams;
}(SpeakeasyBase));
export { GetProductsStatusStatusCountJsonPathParams };
var GetProductsStatusStatusCountJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetProductsStatusStatusCountJsonQueryParams, _super);
    function GetProductsStatusStatusCountJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetProductsStatusStatusCountJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locale" }),
        __metadata("design:type", String)
    ], GetProductsStatusStatusCountJsonQueryParams.prototype, "locale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetProductsStatusStatusCountJsonQueryParams.prototype, "login", void 0);
    return GetProductsStatusStatusCountJsonQueryParams;
}(SpeakeasyBase));
export { GetProductsStatusStatusCountJsonQueryParams };
var GetProductsStatusStatusCountJsonRequest = /** @class */ (function (_super) {
    __extends(GetProductsStatusStatusCountJsonRequest, _super);
    function GetProductsStatusStatusCountJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsStatusStatusCountJsonPathParams)
    ], GetProductsStatusStatusCountJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProductsStatusStatusCountJsonQueryParams)
    ], GetProductsStatusStatusCountJsonRequest.prototype, "queryParams", void 0);
    return GetProductsStatusStatusCountJsonRequest;
}(SpeakeasyBase));
export { GetProductsStatusStatusCountJsonRequest };
var GetProductsStatusStatusCountJsonResponse = /** @class */ (function (_super) {
    __extends(GetProductsStatusStatusCountJsonResponse, _super);
    function GetProductsStatusStatusCountJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProductsStatusStatusCountJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProductsStatusStatusCountJsonResponse.prototype, "count", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProductsStatusStatusCountJsonResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetProductsStatusStatusCountJsonResponse.prototype, "statusInvalid", void 0);
    return GetProductsStatusStatusCountJsonResponse;
}(SpeakeasyBase));
export { GetProductsStatusStatusCountJsonResponse };

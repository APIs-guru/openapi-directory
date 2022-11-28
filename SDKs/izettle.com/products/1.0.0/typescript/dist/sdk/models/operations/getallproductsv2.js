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
var GetAllProductsV2PathParams = /** @class */ (function (_super) {
    __extends(GetAllProductsV2PathParams, _super);
    function GetAllProductsV2PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationUuid" }),
        __metadata("design:type", String)
    ], GetAllProductsV2PathParams.prototype, "organizationUuid", void 0);
    return GetAllProductsV2PathParams;
}(SpeakeasyBase));
export { GetAllProductsV2PathParams };
var GetAllProductsV2QueryParams = /** @class */ (function (_super) {
    __extends(GetAllProductsV2QueryParams, _super);
    function GetAllProductsV2QueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", Boolean)
    ], GetAllProductsV2QueryParams.prototype, "sort", void 0);
    return GetAllProductsV2QueryParams;
}(SpeakeasyBase));
export { GetAllProductsV2QueryParams };
var GetAllProductsV2Security = /** @class */ (function (_super) {
    __extends(GetAllProductsV2Security, _super);
    function GetAllProductsV2Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeZettleApiKey)
    ], GetAllProductsV2Security.prototype, "zettleApiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeZettleOauth)
    ], GetAllProductsV2Security.prototype, "zettleOauth", void 0);
    return GetAllProductsV2Security;
}(SpeakeasyBase));
export { GetAllProductsV2Security };
var GetAllProductsV2Request = /** @class */ (function (_super) {
    __extends(GetAllProductsV2Request, _super);
    function GetAllProductsV2Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllProductsV2PathParams)
    ], GetAllProductsV2Request.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllProductsV2QueryParams)
    ], GetAllProductsV2Request.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllProductsV2Security)
    ], GetAllProductsV2Request.prototype, "security", void 0);
    return GetAllProductsV2Request;
}(SpeakeasyBase));
export { GetAllProductsV2Request };
var GetAllProductsV2Response = /** @class */ (function (_super) {
    __extends(GetAllProductsV2Response, _super);
    function GetAllProductsV2Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllProductsV2Response.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ProductResponse }),
        __metadata("design:type", Array)
    ], GetAllProductsV2Response.prototype, "productResponses", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllProductsV2Response.prototype, "statusCode", void 0);
    return GetAllProductsV2Response;
}(SpeakeasyBase));
export { GetAllProductsV2Response };

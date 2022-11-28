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
var GetInstantMixFromItemPathParams = /** @class */ (function (_super) {
    __extends(GetInstantMixFromItemPathParams, _super);
    function GetInstantMixFromItemPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetInstantMixFromItemPathParams.prototype, "id", void 0);
    return GetInstantMixFromItemPathParams;
}(SpeakeasyBase));
export { GetInstantMixFromItemPathParams };
var GetInstantMixFromItemQueryParams = /** @class */ (function (_super) {
    __extends(GetInstantMixFromItemQueryParams, _super);
    function GetInstantMixFromItemQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImageTypes" }),
        __metadata("design:type", Array)
    ], GetInstantMixFromItemQueryParams.prototype, "enableImageTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableImages" }),
        __metadata("design:type", Boolean)
    ], GetInstantMixFromItemQueryParams.prototype, "enableImages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enableUserData" }),
        __metadata("design:type", Boolean)
    ], GetInstantMixFromItemQueryParams.prototype, "enableUserData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", Array)
    ], GetInstantMixFromItemQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imageTypeLimit" }),
        __metadata("design:type", Number)
    ], GetInstantMixFromItemQueryParams.prototype, "imageTypeLimit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetInstantMixFromItemQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetInstantMixFromItemQueryParams.prototype, "userId", void 0);
    return GetInstantMixFromItemQueryParams;
}(SpeakeasyBase));
export { GetInstantMixFromItemQueryParams };
var GetInstantMixFromItemSecurity = /** @class */ (function (_super) {
    __extends(GetInstantMixFromItemSecurity, _super);
    function GetInstantMixFromItemSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetInstantMixFromItemSecurity.prototype, "customAuthentication", void 0);
    return GetInstantMixFromItemSecurity;
}(SpeakeasyBase));
export { GetInstantMixFromItemSecurity };
var GetInstantMixFromItemRequest = /** @class */ (function (_super) {
    __extends(GetInstantMixFromItemRequest, _super);
    function GetInstantMixFromItemRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstantMixFromItemPathParams)
    ], GetInstantMixFromItemRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstantMixFromItemQueryParams)
    ], GetInstantMixFromItemRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetInstantMixFromItemSecurity)
    ], GetInstantMixFromItemRequest.prototype, "security", void 0);
    return GetInstantMixFromItemRequest;
}(SpeakeasyBase));
export { GetInstantMixFromItemRequest };
var GetInstantMixFromItemResponse = /** @class */ (function (_super) {
    __extends(GetInstantMixFromItemResponse, _super);
    function GetInstantMixFromItemResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetInstantMixFromItemResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetInstantMixFromItemResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetInstantMixFromItemResponse.prototype, "statusCode", void 0);
    return GetInstantMixFromItemResponse;
}(SpeakeasyBase));
export { GetInstantMixFromItemResponse };

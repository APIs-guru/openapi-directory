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
var ReferencesCitiesByCityCodeGetPathParams = /** @class */ (function (_super) {
    __extends(ReferencesCitiesByCityCodeGetPathParams, _super);
    function ReferencesCitiesByCityCodeGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cityCode" }),
        __metadata("design:type", String)
    ], ReferencesCitiesByCityCodeGetPathParams.prototype, "cityCode", void 0);
    return ReferencesCitiesByCityCodeGetPathParams;
}(SpeakeasyBase));
export { ReferencesCitiesByCityCodeGetPathParams };
var ReferencesCitiesByCityCodeGetQueryParams = /** @class */ (function (_super) {
    __extends(ReferencesCitiesByCityCodeGetQueryParams, _super);
    function ReferencesCitiesByCityCodeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ReferencesCitiesByCityCodeGetQueryParams.prototype, "lang", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], ReferencesCitiesByCityCodeGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], ReferencesCitiesByCityCodeGetQueryParams.prototype, "offset", void 0);
    return ReferencesCitiesByCityCodeGetQueryParams;
}(SpeakeasyBase));
export { ReferencesCitiesByCityCodeGetQueryParams };
var ReferencesCitiesByCityCodeGetHeaders = /** @class */ (function (_super) {
    __extends(ReferencesCitiesByCityCodeGetHeaders, _super);
    function ReferencesCitiesByCityCodeGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], ReferencesCitiesByCityCodeGetHeaders.prototype, "accept", void 0);
    return ReferencesCitiesByCityCodeGetHeaders;
}(SpeakeasyBase));
export { ReferencesCitiesByCityCodeGetHeaders };
var ReferencesCitiesByCityCodeGetSecurity = /** @class */ (function (_super) {
    __extends(ReferencesCitiesByCityCodeGetSecurity, _super);
    function ReferencesCitiesByCityCodeGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], ReferencesCitiesByCityCodeGetSecurity.prototype, "auth", void 0);
    return ReferencesCitiesByCityCodeGetSecurity;
}(SpeakeasyBase));
export { ReferencesCitiesByCityCodeGetSecurity };
var ReferencesCitiesByCityCodeGetRequest = /** @class */ (function (_super) {
    __extends(ReferencesCitiesByCityCodeGetRequest, _super);
    function ReferencesCitiesByCityCodeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReferencesCitiesByCityCodeGetPathParams)
    ], ReferencesCitiesByCityCodeGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReferencesCitiesByCityCodeGetQueryParams)
    ], ReferencesCitiesByCityCodeGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReferencesCitiesByCityCodeGetHeaders)
    ], ReferencesCitiesByCityCodeGetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReferencesCitiesByCityCodeGetSecurity)
    ], ReferencesCitiesByCityCodeGetRequest.prototype, "security", void 0);
    return ReferencesCitiesByCityCodeGetRequest;
}(SpeakeasyBase));
export { ReferencesCitiesByCityCodeGetRequest };
var ReferencesCitiesByCityCodeGetResponse = /** @class */ (function (_super) {
    __extends(ReferencesCitiesByCityCodeGetResponse, _super);
    function ReferencesCitiesByCityCodeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReferencesCitiesByCityCodeGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReferencesCitiesByCityCodeGetResponse.prototype, "referencesCitiesByCityCodeGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReferencesCitiesByCityCodeGetResponse.prototype, "statusCode", void 0);
    return ReferencesCitiesByCityCodeGetResponse;
}(SpeakeasyBase));
export { ReferencesCitiesByCityCodeGetResponse };

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
var GetIPv6RangesQueryParams = /** @class */ (function (_super) {
    __extends(GetIPv6RangesQueryParams, _super);
    function GetIPv6RangesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetIPv6RangesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetIPv6RangesQueryParams.prototype, "pageSize", void 0);
    return GetIPv6RangesQueryParams;
}(SpeakeasyBase));
export { GetIPv6RangesQueryParams };
var GetIPv6RangesSecurity = /** @class */ (function (_super) {
    __extends(GetIPv6RangesSecurity, _super);
    function GetIPv6RangesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetIPv6RangesSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetIPv6RangesSecurity.prototype, "oauth", void 0);
    return GetIPv6RangesSecurity;
}(SpeakeasyBase));
export { GetIPv6RangesSecurity };
var GetIPv6Ranges200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetIPv6Ranges200ApplicationJson, _super);
    function GetIPv6Ranges200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.IPv6Range }),
        __metadata("design:type", Array)
    ], GetIPv6Ranges200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetIPv6Ranges200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetIPv6Ranges200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetIPv6Ranges200ApplicationJson.prototype, "results", void 0);
    return GetIPv6Ranges200ApplicationJson;
}(SpeakeasyBase));
export { GetIPv6Ranges200ApplicationJson };
var GetIPv6RangesDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetIPv6RangesDefaultApplicationJson, _super);
    function GetIPv6RangesDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetIPv6RangesDefaultApplicationJson.prototype, "errors", void 0);
    return GetIPv6RangesDefaultApplicationJson;
}(SpeakeasyBase));
export { GetIPv6RangesDefaultApplicationJson };
var GetIPv6RangesRequest = /** @class */ (function (_super) {
    __extends(GetIPv6RangesRequest, _super);
    function GetIPv6RangesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIPv6RangesQueryParams)
    ], GetIPv6RangesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIPv6RangesSecurity)
    ], GetIPv6RangesRequest.prototype, "security", void 0);
    return GetIPv6RangesRequest;
}(SpeakeasyBase));
export { GetIPv6RangesRequest };
var GetIPv6RangesResponse = /** @class */ (function (_super) {
    __extends(GetIPv6RangesResponse, _super);
    function GetIPv6RangesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetIPv6RangesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetIPv6RangesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIPv6Ranges200ApplicationJson)
    ], GetIPv6RangesResponse.prototype, "getIPv6Ranges200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetIPv6RangesDefaultApplicationJson)
    ], GetIPv6RangesResponse.prototype, "getIPv6RangesDefaultApplicationJsonObject", void 0);
    return GetIPv6RangesResponse;
}(SpeakeasyBase));
export { GetIPv6RangesResponse };

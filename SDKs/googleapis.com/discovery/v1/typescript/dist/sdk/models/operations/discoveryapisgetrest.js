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
var DiscoveryApisGetRestPathParams = /** @class */ (function (_super) {
    __extends(DiscoveryApisGetRestPathParams, _super);
    function DiscoveryApisGetRestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=api" }),
        __metadata("design:type", String)
    ], DiscoveryApisGetRestPathParams.prototype, "api", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version" }),
        __metadata("design:type", String)
    ], DiscoveryApisGetRestPathParams.prototype, "version", void 0);
    return DiscoveryApisGetRestPathParams;
}(SpeakeasyBase));
export { DiscoveryApisGetRestPathParams };
var DiscoveryApisGetRestQueryParams = /** @class */ (function (_super) {
    __extends(DiscoveryApisGetRestQueryParams, _super);
    function DiscoveryApisGetRestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DiscoveryApisGetRestQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DiscoveryApisGetRestQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DiscoveryApisGetRestQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DiscoveryApisGetRestQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DiscoveryApisGetRestQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DiscoveryApisGetRestQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], DiscoveryApisGetRestQueryParams.prototype, "userIp", void 0);
    return DiscoveryApisGetRestQueryParams;
}(SpeakeasyBase));
export { DiscoveryApisGetRestQueryParams };
var DiscoveryApisGetRestRequest = /** @class */ (function (_super) {
    __extends(DiscoveryApisGetRestRequest, _super);
    function DiscoveryApisGetRestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryApisGetRestPathParams)
    ], DiscoveryApisGetRestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DiscoveryApisGetRestQueryParams)
    ], DiscoveryApisGetRestRequest.prototype, "queryParams", void 0);
    return DiscoveryApisGetRestRequest;
}(SpeakeasyBase));
export { DiscoveryApisGetRestRequest };
var DiscoveryApisGetRestResponse = /** @class */ (function (_super) {
    __extends(DiscoveryApisGetRestResponse, _super);
    function DiscoveryApisGetRestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DiscoveryApisGetRestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RestDescription)
    ], DiscoveryApisGetRestResponse.prototype, "restDescription", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DiscoveryApisGetRestResponse.prototype, "statusCode", void 0);
    return DiscoveryApisGetRestResponse;
}(SpeakeasyBase));
export { DiscoveryApisGetRestResponse };

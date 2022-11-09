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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var OndRoutePathParams = /** @class */ (function (_super) {
    __extends(OndRoutePathParams, _super);
    function OndRoutePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=destination" }),
        __metadata("design:type", String)
    ], OndRoutePathParams.prototype, "destination", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=origin" }),
        __metadata("design:type", String)
    ], OndRoutePathParams.prototype, "origin", void 0);
    return OndRoutePathParams;
}(SpeakeasyBase));
export { OndRoutePathParams };
var OndRouteQueryParams = /** @class */ (function (_super) {
    __extends(OndRouteQueryParams, _super);
    function OndRouteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=catalogues" }),
        __metadata("design:type", String)
    ], OndRouteQueryParams.prototype, "catalogues", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], OndRouteQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], OndRouteQueryParams.prototype, "offset", void 0);
    return OndRouteQueryParams;
}(SpeakeasyBase));
export { OndRouteQueryParams };
var OndRouteHeaders = /** @class */ (function (_super) {
    __extends(OndRouteHeaders, _super);
    function OndRouteHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], OndRouteHeaders.prototype, "accept", void 0);
    return OndRouteHeaders;
}(SpeakeasyBase));
export { OndRouteHeaders };
var OndRouteSecurity = /** @class */ (function (_super) {
    __extends(OndRouteSecurity, _super);
    function OndRouteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], OndRouteSecurity.prototype, "auth", void 0);
    return OndRouteSecurity;
}(SpeakeasyBase));
export { OndRouteSecurity };
var OndRouteRequest = /** @class */ (function (_super) {
    __extends(OndRouteRequest, _super);
    function OndRouteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OndRoutePathParams)
    ], OndRouteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OndRouteQueryParams)
    ], OndRouteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OndRouteHeaders)
    ], OndRouteRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OndRouteSecurity)
    ], OndRouteRequest.prototype, "security", void 0);
    return OndRouteRequest;
}(SpeakeasyBase));
export { OndRouteRequest };
var OndRouteResponse = /** @class */ (function (_super) {
    __extends(OndRouteResponse, _super);
    function OndRouteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OndRouteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OndRouteResponse.prototype, "ondRoute200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OndRouteResponse.prototype, "statusCode", void 0);
    return OndRouteResponse;
}(SpeakeasyBase));
export { OndRouteResponse };

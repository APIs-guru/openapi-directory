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
var OndStatusQueryParams = /** @class */ (function (_super) {
    __extends(OndStatusQueryParams, _super);
    function OndStatusQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=catalogues" }),
        __metadata("design:type", String)
    ], OndStatusQueryParams.prototype, "catalogues", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=new-routes" }),
        __metadata("design:type", String)
    ], OndStatusQueryParams.prototype, "newRoutes", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=old-routes" }),
        __metadata("design:type", String)
    ], OndStatusQueryParams.prototype, "oldRoutes", void 0);
    return OndStatusQueryParams;
}(SpeakeasyBase));
export { OndStatusQueryParams };
var OndStatusHeaders = /** @class */ (function (_super) {
    __extends(OndStatusHeaders, _super);
    function OndStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], OndStatusHeaders.prototype, "accept", void 0);
    return OndStatusHeaders;
}(SpeakeasyBase));
export { OndStatusHeaders };
var OndStatusSecurity = /** @class */ (function (_super) {
    __extends(OndStatusSecurity, _super);
    function OndStatusSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], OndStatusSecurity.prototype, "auth", void 0);
    return OndStatusSecurity;
}(SpeakeasyBase));
export { OndStatusSecurity };
var OndStatusRequest = /** @class */ (function (_super) {
    __extends(OndStatusRequest, _super);
    function OndStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", OndStatusQueryParams)
    ], OndStatusRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OndStatusHeaders)
    ], OndStatusRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", OndStatusSecurity)
    ], OndStatusRequest.prototype, "security", void 0);
    return OndStatusRequest;
}(SpeakeasyBase));
export { OndStatusRequest };
var OndStatusResponse = /** @class */ (function (_super) {
    __extends(OndStatusResponse, _super);
    function OndStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OndStatusResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], OndStatusResponse.prototype, "ondStatus200ApplicationJsonString", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], OndStatusResponse.prototype, "statusCode", void 0);
    return OndStatusResponse;
}(SpeakeasyBase));
export { OndStatusResponse };

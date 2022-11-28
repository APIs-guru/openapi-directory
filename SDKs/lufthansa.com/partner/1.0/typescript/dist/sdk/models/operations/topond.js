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
var TopOndQueryParams = /** @class */ (function (_super) {
    __extends(TopOndQueryParams, _super);
    function TopOndQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=catalogues" }),
        __metadata("design:type", String)
    ], TopOndQueryParams.prototype, "catalogues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=origin" }),
        __metadata("design:type", String)
    ], TopOndQueryParams.prototype, "origin", void 0);
    return TopOndQueryParams;
}(SpeakeasyBase));
export { TopOndQueryParams };
var TopOndHeaders = /** @class */ (function (_super) {
    __extends(TopOndHeaders, _super);
    function TopOndHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], TopOndHeaders.prototype, "accept", void 0);
    return TopOndHeaders;
}(SpeakeasyBase));
export { TopOndHeaders };
var TopOndSecurity = /** @class */ (function (_super) {
    __extends(TopOndSecurity, _super);
    function TopOndSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], TopOndSecurity.prototype, "auth", void 0);
    return TopOndSecurity;
}(SpeakeasyBase));
export { TopOndSecurity };
var TopOndRequest = /** @class */ (function (_super) {
    __extends(TopOndRequest, _super);
    function TopOndRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TopOndQueryParams)
    ], TopOndRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TopOndHeaders)
    ], TopOndRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TopOndSecurity)
    ], TopOndRequest.prototype, "security", void 0);
    return TopOndRequest;
}(SpeakeasyBase));
export { TopOndRequest };
var TopOndResponse = /** @class */ (function (_super) {
    __extends(TopOndResponse, _super);
    function TopOndResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TopOndResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TopOndResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TopOndResponse.prototype, "topOnd200ApplicationJsonString", void 0);
    return TopOndResponse;
}(SpeakeasyBase));
export { TopOndResponse };

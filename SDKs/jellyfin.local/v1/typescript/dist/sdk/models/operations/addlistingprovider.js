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
var AddListingProviderQueryParams = /** @class */ (function (_super) {
    __extends(AddListingProviderQueryParams, _super);
    function AddListingProviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pw" }),
        __metadata("design:type", String)
    ], AddListingProviderQueryParams.prototype, "pw", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateListings" }),
        __metadata("design:type", Boolean)
    ], AddListingProviderQueryParams.prototype, "validateListings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateLogin" }),
        __metadata("design:type", Boolean)
    ], AddListingProviderQueryParams.prototype, "validateLogin", void 0);
    return AddListingProviderQueryParams;
}(SpeakeasyBase));
export { AddListingProviderQueryParams };
var AddListingProviderRequests = /** @class */ (function (_super) {
    __extends(AddListingProviderRequests, _super);
    function AddListingProviderRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ListingsProviderInfo)
    ], AddListingProviderRequests.prototype, "listingsProviderInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ListingsProviderInfo)
    ], AddListingProviderRequests.prototype, "listingsProviderInfo1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ListingsProviderInfo)
    ], AddListingProviderRequests.prototype, "listingsProviderInfo2", void 0);
    return AddListingProviderRequests;
}(SpeakeasyBase));
export { AddListingProviderRequests };
var AddListingProviderSecurity = /** @class */ (function (_super) {
    __extends(AddListingProviderSecurity, _super);
    function AddListingProviderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], AddListingProviderSecurity.prototype, "customAuthentication", void 0);
    return AddListingProviderSecurity;
}(SpeakeasyBase));
export { AddListingProviderSecurity };
var AddListingProviderRequest = /** @class */ (function (_super) {
    __extends(AddListingProviderRequest, _super);
    function AddListingProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddListingProviderQueryParams)
    ], AddListingProviderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddListingProviderRequests)
    ], AddListingProviderRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddListingProviderSecurity)
    ], AddListingProviderRequest.prototype, "security", void 0);
    return AddListingProviderRequest;
}(SpeakeasyBase));
export { AddListingProviderRequest };
var AddListingProviderResponse = /** @class */ (function (_super) {
    __extends(AddListingProviderResponse, _super);
    function AddListingProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddListingProviderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListingsProviderInfo)
    ], AddListingProviderResponse.prototype, "listingsProviderInfo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddListingProviderResponse.prototype, "statusCode", void 0);
    return AddListingProviderResponse;
}(SpeakeasyBase));
export { AddListingProviderResponse };

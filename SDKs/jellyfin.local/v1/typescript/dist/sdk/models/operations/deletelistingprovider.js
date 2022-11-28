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
var DeleteListingProviderQueryParams = /** @class */ (function (_super) {
    __extends(DeleteListingProviderQueryParams, _super);
    function DeleteListingProviderQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" }),
        __metadata("design:type", String)
    ], DeleteListingProviderQueryParams.prototype, "id", void 0);
    return DeleteListingProviderQueryParams;
}(SpeakeasyBase));
export { DeleteListingProviderQueryParams };
var DeleteListingProviderSecurity = /** @class */ (function (_super) {
    __extends(DeleteListingProviderSecurity, _super);
    function DeleteListingProviderSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], DeleteListingProviderSecurity.prototype, "customAuthentication", void 0);
    return DeleteListingProviderSecurity;
}(SpeakeasyBase));
export { DeleteListingProviderSecurity };
var DeleteListingProviderRequest = /** @class */ (function (_super) {
    __extends(DeleteListingProviderRequest, _super);
    function DeleteListingProviderRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteListingProviderQueryParams)
    ], DeleteListingProviderRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteListingProviderSecurity)
    ], DeleteListingProviderRequest.prototype, "security", void 0);
    return DeleteListingProviderRequest;
}(SpeakeasyBase));
export { DeleteListingProviderRequest };
var DeleteListingProviderResponse = /** @class */ (function (_super) {
    __extends(DeleteListingProviderResponse, _super);
    function DeleteListingProviderResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteListingProviderResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteListingProviderResponse.prototype, "statusCode", void 0);
    return DeleteListingProviderResponse;
}(SpeakeasyBase));
export { DeleteListingProviderResponse };

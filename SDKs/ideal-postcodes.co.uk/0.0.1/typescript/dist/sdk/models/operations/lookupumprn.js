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
var LookupUmprnPathParams = /** @class */ (function (_super) {
    __extends(LookupUmprnPathParams, _super);
    function LookupUmprnPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=umprn" }),
        __metadata("design:type", String)
    ], LookupUmprnPathParams.prototype, "umprn", void 0);
    return LookupUmprnPathParams;
}(SpeakeasyBase));
export { LookupUmprnPathParams };
var LookupUmprnQueryParams = /** @class */ (function (_super) {
    __extends(LookupUmprnQueryParams, _super);
    function LookupUmprnQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], LookupUmprnQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=licensee" }),
        __metadata("design:type", String)
    ], LookupUmprnQueryParams.prototype, "licensee", void 0);
    return LookupUmprnQueryParams;
}(SpeakeasyBase));
export { LookupUmprnQueryParams };
var LookupUmprnSecurity = /** @class */ (function (_super) {
    __extends(LookupUmprnSecurity, _super);
    function LookupUmprnSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], LookupUmprnSecurity.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeUserToken)
    ], LookupUmprnSecurity.prototype, "userToken", void 0);
    return LookupUmprnSecurity;
}(SpeakeasyBase));
export { LookupUmprnSecurity };
var LookupUmprnRequest = /** @class */ (function (_super) {
    __extends(LookupUmprnRequest, _super);
    function LookupUmprnRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LookupUmprnPathParams)
    ], LookupUmprnRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LookupUmprnQueryParams)
    ], LookupUmprnRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LookupUmprnSecurity)
    ], LookupUmprnRequest.prototype, "security", void 0);
    return LookupUmprnRequest;
}(SpeakeasyBase));
export { LookupUmprnRequest };
var LookupUmprnResponse = /** @class */ (function (_super) {
    __extends(LookupUmprnResponse, _super);
    function LookupUmprnResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AddressLookupResponseSchema)
    ], LookupUmprnResponse.prototype, "addressLookupResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LookupUmprnResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponseSchema)
    ], LookupUmprnResponse.prototype, "errorResponseSchema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LookupUmprnResponse.prototype, "statusCode", void 0);
    return LookupUmprnResponse;
}(SpeakeasyBase));
export { LookupUmprnResponse };

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
var BaggageTripAndContactPathParams = /** @class */ (function (_super) {
    __extends(BaggageTripAndContactPathParams, _super);
    function BaggageTripAndContactPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=searchID" }),
        __metadata("design:type", String)
    ], BaggageTripAndContactPathParams.prototype, "searchId", void 0);
    return BaggageTripAndContactPathParams;
}(SpeakeasyBase));
export { BaggageTripAndContactPathParams };
var BaggageTripAndContactHeaders = /** @class */ (function (_super) {
    __extends(BaggageTripAndContactHeaders, _super);
    function BaggageTripAndContactHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], BaggageTripAndContactHeaders.prototype, "accept", void 0);
    return BaggageTripAndContactHeaders;
}(SpeakeasyBase));
export { BaggageTripAndContactHeaders };
var BaggageTripAndContactSecurity = /** @class */ (function (_super) {
    __extends(BaggageTripAndContactSecurity, _super);
    function BaggageTripAndContactSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], BaggageTripAndContactSecurity.prototype, "auth", void 0);
    return BaggageTripAndContactSecurity;
}(SpeakeasyBase));
export { BaggageTripAndContactSecurity };
var BaggageTripAndContactRequest = /** @class */ (function (_super) {
    __extends(BaggageTripAndContactRequest, _super);
    function BaggageTripAndContactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaggageTripAndContactPathParams)
    ], BaggageTripAndContactRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaggageTripAndContactHeaders)
    ], BaggageTripAndContactRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BaggageTripAndContactSecurity)
    ], BaggageTripAndContactRequest.prototype, "security", void 0);
    return BaggageTripAndContactRequest;
}(SpeakeasyBase));
export { BaggageTripAndContactRequest };
var BaggageTripAndContactResponse = /** @class */ (function (_super) {
    __extends(BaggageTripAndContactResponse, _super);
    function BaggageTripAndContactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BaggageTripAndContactResponse.prototype, "baggageTripAndContact200ApplicationJsonString", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BaggageTripAndContactResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BaggageTripAndContactResponse.prototype, "statusCode", void 0);
    return BaggageTripAndContactResponse;
}(SpeakeasyBase));
export { BaggageTripAndContactResponse };

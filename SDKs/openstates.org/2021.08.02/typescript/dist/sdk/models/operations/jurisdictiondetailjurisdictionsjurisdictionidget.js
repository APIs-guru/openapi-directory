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
var JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams = /** @class */ (function (_super) {
    __extends(JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams, _super);
    function JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jurisdiction_id" }),
        __metadata("design:type", String)
    ], JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams.prototype, "jurisdictionId", void 0);
    return JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams;
}(SpeakeasyBase));
export { JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams };
var JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams = /** @class */ (function (_super) {
    __extends(JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams, _super);
    function JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apikey" }),
        __metadata("design:type", String)
    ], JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams.prototype, "apikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include" }),
        __metadata("design:type", Array)
    ], JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams.prototype, "include", void 0);
    return JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams;
}(SpeakeasyBase));
export { JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams };
var JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders = /** @class */ (function (_super) {
    __extends(JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders, _super);
    function JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-api-key" }),
        __metadata("design:type", String)
    ], JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders.prototype, "xApiKey", void 0);
    return JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders;
}(SpeakeasyBase));
export { JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders };
var JurisdictionDetailJurisdictionsJurisdictionIdGetRequest = /** @class */ (function (_super) {
    __extends(JurisdictionDetailJurisdictionsJurisdictionIdGetRequest, _super);
    function JurisdictionDetailJurisdictionsJurisdictionIdGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JurisdictionDetailJurisdictionsJurisdictionIdGetPathParams)
    ], JurisdictionDetailJurisdictionsJurisdictionIdGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JurisdictionDetailJurisdictionsJurisdictionIdGetQueryParams)
    ], JurisdictionDetailJurisdictionsJurisdictionIdGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", JurisdictionDetailJurisdictionsJurisdictionIdGetHeaders)
    ], JurisdictionDetailJurisdictionsJurisdictionIdGetRequest.prototype, "headers", void 0);
    return JurisdictionDetailJurisdictionsJurisdictionIdGetRequest;
}(SpeakeasyBase));
export { JurisdictionDetailJurisdictionsJurisdictionIdGetRequest };
var JurisdictionDetailJurisdictionsJurisdictionIdGetResponse = /** @class */ (function (_super) {
    __extends(JurisdictionDetailJurisdictionsJurisdictionIdGetResponse, _super);
    function JurisdictionDetailJurisdictionsJurisdictionIdGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], JurisdictionDetailJurisdictionsJurisdictionIdGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], JurisdictionDetailJurisdictionsJurisdictionIdGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Jurisdiction)
    ], JurisdictionDetailJurisdictionsJurisdictionIdGetResponse.prototype, "jurisdiction", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], JurisdictionDetailJurisdictionsJurisdictionIdGetResponse.prototype, "statusCode", void 0);
    return JurisdictionDetailJurisdictionsJurisdictionIdGetResponse;
}(SpeakeasyBase));
export { JurisdictionDetailJurisdictionsJurisdictionIdGetResponse };

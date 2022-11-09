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
var GetApodQueryParams = /** @class */ (function (_super) {
    __extends(GetApodQueryParams, _super);
    function GetApodQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", String)
    ], GetApodQueryParams.prototype, "date", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=hd" }),
        __metadata("design:type", Boolean)
    ], GetApodQueryParams.prototype, "hd", void 0);
    return GetApodQueryParams;
}(SpeakeasyBase));
export { GetApodQueryParams };
var GetApodSecurity = /** @class */ (function (_super) {
    __extends(GetApodSecurity, _super);
    function GetApodSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetApodSecurity.prototype, "apiKey", void 0);
    return GetApodSecurity;
}(SpeakeasyBase));
export { GetApodSecurity };
var GetApodRequest = /** @class */ (function (_super) {
    __extends(GetApodRequest, _super);
    function GetApodRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetApodQueryParams)
    ], GetApodRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetApodSecurity)
    ], GetApodRequest.prototype, "security", void 0);
    return GetApodRequest;
}(SpeakeasyBase));
export { GetApodRequest };
var GetApodResponse = /** @class */ (function (_super) {
    __extends(GetApodResponse, _super);
    function GetApodResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetApodResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Array)
    ], GetApodResponse.prototype, "getApod200ApplicationJsonAnies", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetApodResponse.prototype, "statusCode", void 0);
    return GetApodResponse;
}(SpeakeasyBase));
export { GetApodResponse };

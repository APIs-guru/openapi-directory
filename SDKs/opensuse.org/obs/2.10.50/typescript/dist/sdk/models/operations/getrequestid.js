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
var GetRequestIdPathParams = /** @class */ (function (_super) {
    __extends(GetRequestIdPathParams, _super);
    function GetRequestIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetRequestIdPathParams.prototype, "id", void 0);
    return GetRequestIdPathParams;
}(SpeakeasyBase));
export { GetRequestIdPathParams };
var GetRequestIdQueryParams = /** @class */ (function (_super) {
    __extends(GetRequestIdQueryParams, _super);
    function GetRequestIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withfullhistory" }),
        __metadata("design:type", String)
    ], GetRequestIdQueryParams.prototype, "withfullhistory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=withhistory" }),
        __metadata("design:type", String)
    ], GetRequestIdQueryParams.prototype, "withhistory", void 0);
    return GetRequestIdQueryParams;
}(SpeakeasyBase));
export { GetRequestIdQueryParams };
var GetRequestIdSecurity = /** @class */ (function (_super) {
    __extends(GetRequestIdSecurity, _super);
    function GetRequestIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetRequestIdSecurity.prototype, "basicAuthentication", void 0);
    return GetRequestIdSecurity;
}(SpeakeasyBase));
export { GetRequestIdSecurity };
var GetRequestIdRequest = /** @class */ (function (_super) {
    __extends(GetRequestIdRequest, _super);
    function GetRequestIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRequestIdPathParams)
    ], GetRequestIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRequestIdQueryParams)
    ], GetRequestIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetRequestIdSecurity)
    ], GetRequestIdRequest.prototype, "security", void 0);
    return GetRequestIdRequest;
}(SpeakeasyBase));
export { GetRequestIdRequest };
var GetRequestIdResponse = /** @class */ (function (_super) {
    __extends(GetRequestIdResponse, _super);
    function GetRequestIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetRequestIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetRequestIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetRequestIdResponse.prototype, "statusCode", void 0);
    return GetRequestIdResponse;
}(SpeakeasyBase));
export { GetRequestIdResponse };

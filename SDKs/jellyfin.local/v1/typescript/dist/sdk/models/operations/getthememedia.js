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
var GetThemeMediaPathParams = /** @class */ (function (_super) {
    __extends(GetThemeMediaPathParams, _super);
    function GetThemeMediaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetThemeMediaPathParams.prototype, "itemId", void 0);
    return GetThemeMediaPathParams;
}(SpeakeasyBase));
export { GetThemeMediaPathParams };
var GetThemeMediaQueryParams = /** @class */ (function (_super) {
    __extends(GetThemeMediaQueryParams, _super);
    function GetThemeMediaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=inheritFromParent" }),
        __metadata("design:type", Boolean)
    ], GetThemeMediaQueryParams.prototype, "inheritFromParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetThemeMediaQueryParams.prototype, "userId", void 0);
    return GetThemeMediaQueryParams;
}(SpeakeasyBase));
export { GetThemeMediaQueryParams };
var GetThemeMediaSecurity = /** @class */ (function (_super) {
    __extends(GetThemeMediaSecurity, _super);
    function GetThemeMediaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetThemeMediaSecurity.prototype, "customAuthentication", void 0);
    return GetThemeMediaSecurity;
}(SpeakeasyBase));
export { GetThemeMediaSecurity };
var GetThemeMediaRequest = /** @class */ (function (_super) {
    __extends(GetThemeMediaRequest, _super);
    function GetThemeMediaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetThemeMediaPathParams)
    ], GetThemeMediaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetThemeMediaQueryParams)
    ], GetThemeMediaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetThemeMediaSecurity)
    ], GetThemeMediaRequest.prototype, "security", void 0);
    return GetThemeMediaRequest;
}(SpeakeasyBase));
export { GetThemeMediaRequest };
var GetThemeMediaResponse = /** @class */ (function (_super) {
    __extends(GetThemeMediaResponse, _super);
    function GetThemeMediaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AllThemeMediaResult)
    ], GetThemeMediaResponse.prototype, "allThemeMediaResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetThemeMediaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetThemeMediaResponse.prototype, "statusCode", void 0);
    return GetThemeMediaResponse;
}(SpeakeasyBase));
export { GetThemeMediaResponse };

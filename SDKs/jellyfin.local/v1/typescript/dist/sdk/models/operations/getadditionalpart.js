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
var GetAdditionalPartPathParams = /** @class */ (function (_super) {
    __extends(GetAdditionalPartPathParams, _super);
    function GetAdditionalPartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], GetAdditionalPartPathParams.prototype, "itemId", void 0);
    return GetAdditionalPartPathParams;
}(SpeakeasyBase));
export { GetAdditionalPartPathParams };
var GetAdditionalPartQueryParams = /** @class */ (function (_super) {
    __extends(GetAdditionalPartQueryParams, _super);
    function GetAdditionalPartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetAdditionalPartQueryParams.prototype, "userId", void 0);
    return GetAdditionalPartQueryParams;
}(SpeakeasyBase));
export { GetAdditionalPartQueryParams };
var GetAdditionalPartSecurity = /** @class */ (function (_super) {
    __extends(GetAdditionalPartSecurity, _super);
    function GetAdditionalPartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetAdditionalPartSecurity.prototype, "customAuthentication", void 0);
    return GetAdditionalPartSecurity;
}(SpeakeasyBase));
export { GetAdditionalPartSecurity };
var GetAdditionalPartRequest = /** @class */ (function (_super) {
    __extends(GetAdditionalPartRequest, _super);
    function GetAdditionalPartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAdditionalPartPathParams)
    ], GetAdditionalPartRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAdditionalPartQueryParams)
    ], GetAdditionalPartRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAdditionalPartSecurity)
    ], GetAdditionalPartRequest.prototype, "security", void 0);
    return GetAdditionalPartRequest;
}(SpeakeasyBase));
export { GetAdditionalPartRequest };
var GetAdditionalPartResponse = /** @class */ (function (_super) {
    __extends(GetAdditionalPartResponse, _super);
    function GetAdditionalPartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDtoQueryResult)
    ], GetAdditionalPartResponse.prototype, "baseItemDtoQueryResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAdditionalPartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAdditionalPartResponse.prototype, "statusCode", void 0);
    return GetAdditionalPartResponse;
}(SpeakeasyBase));
export { GetAdditionalPartResponse };

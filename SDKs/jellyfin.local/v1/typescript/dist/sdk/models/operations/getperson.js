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
var GetPersonPathParams = /** @class */ (function (_super) {
    __extends(GetPersonPathParams, _super);
    function GetPersonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GetPersonPathParams.prototype, "name", void 0);
    return GetPersonPathParams;
}(SpeakeasyBase));
export { GetPersonPathParams };
var GetPersonQueryParams = /** @class */ (function (_super) {
    __extends(GetPersonQueryParams, _super);
    function GetPersonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetPersonQueryParams.prototype, "userId", void 0);
    return GetPersonQueryParams;
}(SpeakeasyBase));
export { GetPersonQueryParams };
var GetPersonSecurity = /** @class */ (function (_super) {
    __extends(GetPersonSecurity, _super);
    function GetPersonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetPersonSecurity.prototype, "customAuthentication", void 0);
    return GetPersonSecurity;
}(SpeakeasyBase));
export { GetPersonSecurity };
var GetPersonRequest = /** @class */ (function (_super) {
    __extends(GetPersonRequest, _super);
    function GetPersonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonPathParams)
    ], GetPersonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonQueryParams)
    ], GetPersonRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetPersonSecurity)
    ], GetPersonRequest.prototype, "security", void 0);
    return GetPersonRequest;
}(SpeakeasyBase));
export { GetPersonRequest };
var GetPersonResponse = /** @class */ (function (_super) {
    __extends(GetPersonResponse, _super);
    function GetPersonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BaseItemDto)
    ], GetPersonResponse.prototype, "baseItemDto", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetPersonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetPersonResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetPersonResponse.prototype, "statusCode", void 0);
    return GetPersonResponse;
}(SpeakeasyBase));
export { GetPersonResponse };

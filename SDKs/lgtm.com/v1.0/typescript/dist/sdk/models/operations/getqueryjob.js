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
var GetQueryJobPathParams = /** @class */ (function (_super) {
    __extends(GetQueryJobPathParams, _super);
    function GetQueryJobPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=queryjob-id" }),
        __metadata("design:type", String)
    ], GetQueryJobPathParams.prototype, "queryjobId", void 0);
    return GetQueryJobPathParams;
}(SpeakeasyBase));
export { GetQueryJobPathParams };
var GetQueryJobSecurity = /** @class */ (function (_super) {
    __extends(GetQueryJobSecurity, _super);
    function GetQueryJobSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], GetQueryJobSecurity.prototype, "accessToken", void 0);
    return GetQueryJobSecurity;
}(SpeakeasyBase));
export { GetQueryJobSecurity };
var GetQueryJobRequest = /** @class */ (function (_super) {
    __extends(GetQueryJobRequest, _super);
    function GetQueryJobRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryJobPathParams)
    ], GetQueryJobRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryJobSecurity)
    ], GetQueryJobRequest.prototype, "security", void 0);
    return GetQueryJobRequest;
}(SpeakeasyBase));
export { GetQueryJobRequest };
var GetQueryJobResponse = /** @class */ (function (_super) {
    __extends(GetQueryJobResponse, _super);
    function GetQueryJobResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQueryJobResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQueryJobResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Queryjob)
    ], GetQueryJobResponse.prototype, "queryjob", void 0);
    return GetQueryJobResponse;
}(SpeakeasyBase));
export { GetQueryJobResponse };

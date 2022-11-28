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
var GetDomainPathParams = /** @class */ (function (_super) {
    __extends(GetDomainPathParams, _super);
    function GetDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" }),
        __metadata("design:type", Number)
    ], GetDomainPathParams.prototype, "domainId", void 0);
    return GetDomainPathParams;
}(SpeakeasyBase));
export { GetDomainPathParams };
var GetDomainSecurity = /** @class */ (function (_super) {
    __extends(GetDomainSecurity, _super);
    function GetDomainSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetDomainSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetDomainSecurity.prototype, "oauth", void 0);
    return GetDomainSecurity;
}(SpeakeasyBase));
export { GetDomainSecurity };
var GetDomainDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetDomainDefaultApplicationJson, _super);
    function GetDomainDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetDomainDefaultApplicationJson.prototype, "errors", void 0);
    return GetDomainDefaultApplicationJson;
}(SpeakeasyBase));
export { GetDomainDefaultApplicationJson };
var GetDomainRequest = /** @class */ (function (_super) {
    __extends(GetDomainRequest, _super);
    function GetDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainPathParams)
    ], GetDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainSecurity)
    ], GetDomainRequest.prototype, "security", void 0);
    return GetDomainRequest;
}(SpeakeasyBase));
export { GetDomainRequest };
var GetDomainResponse = /** @class */ (function (_super) {
    __extends(GetDomainResponse, _super);
    function GetDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDomainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Domain)
    ], GetDomainResponse.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDomainResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDomainDefaultApplicationJson)
    ], GetDomainResponse.prototype, "getDomainDefaultApplicationJsonObject", void 0);
    return GetDomainResponse;
}(SpeakeasyBase));
export { GetDomainResponse };

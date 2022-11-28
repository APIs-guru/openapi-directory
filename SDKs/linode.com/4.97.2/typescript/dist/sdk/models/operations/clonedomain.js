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
var CloneDomainPathParams = /** @class */ (function (_super) {
    __extends(CloneDomainPathParams, _super);
    function CloneDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" }),
        __metadata("design:type", String)
    ], CloneDomainPathParams.prototype, "domainId", void 0);
    return CloneDomainPathParams;
}(SpeakeasyBase));
export { CloneDomainPathParams };
var CloneDomainRequestBody = /** @class */ (function (_super) {
    __extends(CloneDomainRequestBody, _super);
    function CloneDomainRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], CloneDomainRequestBody.prototype, "domain", void 0);
    return CloneDomainRequestBody;
}(SpeakeasyBase));
export { CloneDomainRequestBody };
var CloneDomainSecurity = /** @class */ (function (_super) {
    __extends(CloneDomainSecurity, _super);
    function CloneDomainSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CloneDomainSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CloneDomainSecurity.prototype, "oauth", void 0);
    return CloneDomainSecurity;
}(SpeakeasyBase));
export { CloneDomainSecurity };
var CloneDomainDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CloneDomainDefaultApplicationJson, _super);
    function CloneDomainDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CloneDomainDefaultApplicationJson.prototype, "errors", void 0);
    return CloneDomainDefaultApplicationJson;
}(SpeakeasyBase));
export { CloneDomainDefaultApplicationJson };
var CloneDomainRequest = /** @class */ (function (_super) {
    __extends(CloneDomainRequest, _super);
    function CloneDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloneDomainPathParams)
    ], CloneDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CloneDomainRequestBody)
    ], CloneDomainRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloneDomainSecurity)
    ], CloneDomainRequest.prototype, "security", void 0);
    return CloneDomainRequest;
}(SpeakeasyBase));
export { CloneDomainRequest };
var CloneDomainResponse = /** @class */ (function (_super) {
    __extends(CloneDomainResponse, _super);
    function CloneDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloneDomainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Domain)
    ], CloneDomainResponse.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloneDomainResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloneDomainDefaultApplicationJson)
    ], CloneDomainResponse.prototype, "cloneDomainDefaultApplicationJsonObject", void 0);
    return CloneDomainResponse;
}(SpeakeasyBase));
export { CloneDomainResponse };

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
var UpdateDomainPathParams = /** @class */ (function (_super) {
    __extends(UpdateDomainPathParams, _super);
    function UpdateDomainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domainId" }),
        __metadata("design:type", Number)
    ], UpdateDomainPathParams.prototype, "domainId", void 0);
    return UpdateDomainPathParams;
}(SpeakeasyBase));
export { UpdateDomainPathParams };
var UpdateDomainSecurity = /** @class */ (function (_super) {
    __extends(UpdateDomainSecurity, _super);
    function UpdateDomainSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateDomainSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateDomainSecurity.prototype, "oauth", void 0);
    return UpdateDomainSecurity;
}(SpeakeasyBase));
export { UpdateDomainSecurity };
var UpdateDomainDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateDomainDefaultApplicationJson, _super);
    function UpdateDomainDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateDomainDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateDomainDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateDomainDefaultApplicationJson };
var UpdateDomainRequest = /** @class */ (function (_super) {
    __extends(UpdateDomainRequest, _super);
    function UpdateDomainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainPathParams)
    ], UpdateDomainRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DomainInput)
    ], UpdateDomainRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainSecurity)
    ], UpdateDomainRequest.prototype, "security", void 0);
    return UpdateDomainRequest;
}(SpeakeasyBase));
export { UpdateDomainRequest };
var UpdateDomainResponse = /** @class */ (function (_super) {
    __extends(UpdateDomainResponse, _super);
    function UpdateDomainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDomainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Domain)
    ], UpdateDomainResponse.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDomainResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDomainDefaultApplicationJson)
    ], UpdateDomainResponse.prototype, "updateDomainDefaultApplicationJsonObject", void 0);
    return UpdateDomainResponse;
}(SpeakeasyBase));
export { UpdateDomainResponse };

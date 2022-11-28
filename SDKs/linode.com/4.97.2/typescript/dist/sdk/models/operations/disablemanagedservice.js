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
var DisableManagedServicePathParams = /** @class */ (function (_super) {
    __extends(DisableManagedServicePathParams, _super);
    function DisableManagedServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", Number)
    ], DisableManagedServicePathParams.prototype, "serviceId", void 0);
    return DisableManagedServicePathParams;
}(SpeakeasyBase));
export { DisableManagedServicePathParams };
var DisableManagedServiceSecurity = /** @class */ (function (_super) {
    __extends(DisableManagedServiceSecurity, _super);
    function DisableManagedServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DisableManagedServiceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DisableManagedServiceSecurity.prototype, "oauth", void 0);
    return DisableManagedServiceSecurity;
}(SpeakeasyBase));
export { DisableManagedServiceSecurity };
var DisableManagedServiceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DisableManagedServiceDefaultApplicationJson, _super);
    function DisableManagedServiceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DisableManagedServiceDefaultApplicationJson.prototype, "errors", void 0);
    return DisableManagedServiceDefaultApplicationJson;
}(SpeakeasyBase));
export { DisableManagedServiceDefaultApplicationJson };
var DisableManagedServiceRequest = /** @class */ (function (_super) {
    __extends(DisableManagedServiceRequest, _super);
    function DisableManagedServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisableManagedServicePathParams)
    ], DisableManagedServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisableManagedServiceSecurity)
    ], DisableManagedServiceRequest.prototype, "security", void 0);
    return DisableManagedServiceRequest;
}(SpeakeasyBase));
export { DisableManagedServiceRequest };
var DisableManagedServiceResponse = /** @class */ (function (_super) {
    __extends(DisableManagedServiceResponse, _super);
    function DisableManagedServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DisableManagedServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedService)
    ], DisableManagedServiceResponse.prototype, "managedService", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DisableManagedServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DisableManagedServiceDefaultApplicationJson)
    ], DisableManagedServiceResponse.prototype, "disableManagedServiceDefaultApplicationJsonObject", void 0);
    return DisableManagedServiceResponse;
}(SpeakeasyBase));
export { DisableManagedServiceResponse };

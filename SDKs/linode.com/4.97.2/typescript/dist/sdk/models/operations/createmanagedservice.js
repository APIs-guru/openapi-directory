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
export var CreateManagedServiceRequestBodyServiceTypeEnum;
(function (CreateManagedServiceRequestBodyServiceTypeEnum) {
    CreateManagedServiceRequestBodyServiceTypeEnum["Url"] = "url";
    CreateManagedServiceRequestBodyServiceTypeEnum["Tcp"] = "tcp";
})(CreateManagedServiceRequestBodyServiceTypeEnum || (CreateManagedServiceRequestBodyServiceTypeEnum = {}));
var CreateManagedServiceRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateManagedServiceRequestBodyInput, _super);
    function CreateManagedServiceRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], CreateManagedServiceRequestBodyInput.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=body" }),
        __metadata("design:type", String)
    ], CreateManagedServiceRequestBodyInput.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=consultation_group" }),
        __metadata("design:type", String)
    ], CreateManagedServiceRequestBodyInput.prototype, "consultationGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=credentials" }),
        __metadata("design:type", Array)
    ], CreateManagedServiceRequestBodyInput.prototype, "credentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CreateManagedServiceRequestBodyInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], CreateManagedServiceRequestBodyInput.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], CreateManagedServiceRequestBodyInput.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=service_type" }),
        __metadata("design:type", String)
    ], CreateManagedServiceRequestBodyInput.prototype, "serviceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeout" }),
        __metadata("design:type", Number)
    ], CreateManagedServiceRequestBodyInput.prototype, "timeout", void 0);
    return CreateManagedServiceRequestBodyInput;
}(SpeakeasyBase));
export { CreateManagedServiceRequestBodyInput };
var CreateManagedServiceSecurity = /** @class */ (function (_super) {
    __extends(CreateManagedServiceSecurity, _super);
    function CreateManagedServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateManagedServiceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateManagedServiceSecurity.prototype, "oauth", void 0);
    return CreateManagedServiceSecurity;
}(SpeakeasyBase));
export { CreateManagedServiceSecurity };
var CreateManagedServiceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateManagedServiceDefaultApplicationJson, _super);
    function CreateManagedServiceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateManagedServiceDefaultApplicationJson.prototype, "errors", void 0);
    return CreateManagedServiceDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateManagedServiceDefaultApplicationJson };
var CreateManagedServiceRequest = /** @class */ (function (_super) {
    __extends(CreateManagedServiceRequest, _super);
    function CreateManagedServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateManagedServiceRequestBodyInput)
    ], CreateManagedServiceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateManagedServiceSecurity)
    ], CreateManagedServiceRequest.prototype, "security", void 0);
    return CreateManagedServiceRequest;
}(SpeakeasyBase));
export { CreateManagedServiceRequest };
var CreateManagedServiceResponse = /** @class */ (function (_super) {
    __extends(CreateManagedServiceResponse, _super);
    function CreateManagedServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateManagedServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedService)
    ], CreateManagedServiceResponse.prototype, "managedService", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateManagedServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateManagedServiceDefaultApplicationJson)
    ], CreateManagedServiceResponse.prototype, "createManagedServiceDefaultApplicationJsonObject", void 0);
    return CreateManagedServiceResponse;
}(SpeakeasyBase));
export { CreateManagedServiceResponse };

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
var UpdateManagedServicePathParams = /** @class */ (function (_super) {
    __extends(UpdateManagedServicePathParams, _super);
    function UpdateManagedServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", Number)
    ], UpdateManagedServicePathParams.prototype, "serviceId", void 0);
    return UpdateManagedServicePathParams;
}(SpeakeasyBase));
export { UpdateManagedServicePathParams };
var UpdateManagedServiceSecurity = /** @class */ (function (_super) {
    __extends(UpdateManagedServiceSecurity, _super);
    function UpdateManagedServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateManagedServiceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateManagedServiceSecurity.prototype, "oauth", void 0);
    return UpdateManagedServiceSecurity;
}(SpeakeasyBase));
export { UpdateManagedServiceSecurity };
var UpdateManagedServiceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateManagedServiceDefaultApplicationJson, _super);
    function UpdateManagedServiceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateManagedServiceDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateManagedServiceDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateManagedServiceDefaultApplicationJson };
var UpdateManagedServiceRequest = /** @class */ (function (_super) {
    __extends(UpdateManagedServiceRequest, _super);
    function UpdateManagedServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateManagedServicePathParams)
    ], UpdateManagedServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ManagedServiceInput)
    ], UpdateManagedServiceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateManagedServiceSecurity)
    ], UpdateManagedServiceRequest.prototype, "security", void 0);
    return UpdateManagedServiceRequest;
}(SpeakeasyBase));
export { UpdateManagedServiceRequest };
var UpdateManagedServiceResponse = /** @class */ (function (_super) {
    __extends(UpdateManagedServiceResponse, _super);
    function UpdateManagedServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateManagedServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedService)
    ], UpdateManagedServiceResponse.prototype, "managedService", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateManagedServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateManagedServiceDefaultApplicationJson)
    ], UpdateManagedServiceResponse.prototype, "updateManagedServiceDefaultApplicationJsonObject", void 0);
    return UpdateManagedServiceResponse;
}(SpeakeasyBase));
export { UpdateManagedServiceResponse };
